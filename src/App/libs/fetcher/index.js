import { UrlBuilder } from 'App/utils';

export function Get(url, params) {
  return Fetch('GET', url, params);
}

function xhrFetch(url, { body, method, ...params }, onProgress) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.entries(params).forEach(([key, value]) => {
      switch (key) {
        case 'credentials': {
          xhr.withCredentials = value === 'include';
          break;
        }
        case 'headers': {
          Object.entries(value).forEach(([headerKey, headerValue]) =>
            xhr.setRequestHeader(headerKey, headerValue),
          );
          break;
        }
        default:
          throw new Error('Unsupported param for XMLHttpRequest: ' + value);
      }
    });
    xhr.onload = () =>
      resolve({
        ok: xhr.status >= 200 && xhr.status < 300,
        status: xhr.status,
        headers: new Headers(
          xhr
            .getAllResponseHeaders()
            .trim()
            .split(/[\r\n]+/)
            .map((s) => {
              const index = s.indexOf(':');
              return [s.substring(0, index), s.substring(index + 1)];
            }),
        ),
        text: () => Promise.resolve(xhr.responseText),
        json: () => Promise.resolve(JSON.parse(xhr.responseText)),
      });
    xhr.onerror = (event) => reject(event);
    xhr.upload.onprogress = (event) => onProgress(event.loaded / event.total);
    xhr.send(body);
  });
}

async function Fetch(
  method,
  url,
  { returnRaw, json, onProgress, ...params } = {},
) {
  if (url instanceof UrlBuilder) url = url.toString();
  params.method = method;
  if (json) {
    if (params.body)
      throw new Error("Cannot set both 'json' and 'body' parameters");
    params.body = JSON.stringify(json);
    params.headers = { 'Content-Type': 'application/json' };
  }
  return (
    (onProgress ? xhrFetch(url, params, onProgress) : fetch(url, params))
      // Reject promise if response is not OK
      .then((response) => {
        if (response.ok) return response;
        return response.text().then((text) => {
          let message = text;
          try {
            const json = JSON.parse(text);
            if ('message' in json) message = json.message;
          } catch (e) {
            // not JSON
          }
          return Promise.reject({ message, code: response.status });
        });
      })
      // automatically return the data if it's a known content type
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (!contentType || returnRaw) return response;
        if (contentType.includes('application/json')) {
          return response.json();
        } else if (contentType.includes('text/plain')) {
          return response.text();
        }
        return response;
      })
  );
}
