export function UrlBuilder(url) {
  if (url instanceof UrlBuilder) {
    this.path = url.path;
    this.query = url.query;
  } else if (typeof url === 'string' || url instanceof String) {
    let [path, query] = url.split('?');
    if (!path.startsWith('http') && !path.startsWith('/')) path = '/' + path;

    this.path = path.replace(/\/+$/, '');
    this.query = query ? '?' + query : '';
  } else {
    throw new Error('Unexpected argument (' + typeof url + '): ' + url);
  }
}

UrlBuilder.prototype.add = function (...parts) {
  this.path = [
    this.path,
    ...parts
      .map((part) => (typeof part !== 'string' ? part.toString() : part))
      .map((part) => part.replace(/^\/+|\/+$/g, '')),
  ].join('/');
  return this;
};

UrlBuilder.prototype.queryParam = function (key, val) {
  this.query =
    (this.query ? this.query + '&' : '?') + key + '=' + encodeURIComponent(val);
  return this;
};

UrlBuilder.prototype.toString = function (withTrailingSlash = false) {
  return this.path + (withTrailingSlash ? '/' : '') + this.query;
};
