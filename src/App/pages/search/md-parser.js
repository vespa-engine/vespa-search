import React from 'react';
import { Lexer, walkTokens } from 'marked';
import {
  Blockquote,
  Code,
  Divider,
  Image,
  List,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { Link } from 'App/libs/router';
import { LinkReference } from 'App/pages/search/link-reference';
import { fontWeightBold } from 'App/styles/common';

const refRegex = /^\[([0-9]+)]+/;
const extensions = Object.freeze({
  inline: [
    (src) => {
      const match = refRegex.exec(src);
      if (match) return { type: 'ref', raw: match[0], text: match[1] };
    },
  ],
});

const convertTokens = ({ tokens }, urlResolver) =>
  tokens.map((token, i) => convert(token, `${token.type}-${i}`, urlResolver));

function resolveUrl(url, options) {
  if (options.baseUrl)
    try {
      return new URL(url, options.baseUrl).href;
    } catch (err) {
      return undefined;
    }
  return url.includes('://') ? url : undefined;
}

// https://github.com/markedjs/marked/blob/7c1e114f9f7949ba4033366582d2a4ddf09e85af/src/Tokenizer.js
function convert(token, key, options) {
  switch (token.type) {
    case 'code':
      return (
        <CodeHighlight
          styles={{ code: { fontSize: 'var(--mantine-font-size-xs)' } }}
          key={key}
          language={token.lang || undefined}
          code={token.text}
        />
      );
    case 'blockquote':
      return (
        <Blockquote p="lg" key={key}>
          {convertTokens(token, options)}
        </Blockquote>
      );
    case 'heading':
      return (
        <Title key={key} order={token.depth}>
          {convertTokens(token, options)}
        </Title>
      );
    case 'hr':
      return <Divider key={key} />;
    case 'list':
      return (
        <List
          key={key}
          size="sm"
          type={token.ordered ? 'ordered' : 'unordered'}
        >
          {token.items.map((item, i) => (
            <List.Item key={i}>{convertTokens(item, options)}</List.Item>
          ))}
        </List>
      );
    case 'table':
      return (
        <Table
          key={key}
          styles={{
            table: {
              fontSize: 'var(--mantine-font-size-xs)',
              color: 'var(--low-contrast-text)',
            },
            thead: {
              textTransform: 'uppercase',
              textAlign: 'left',
            },
          }}
        >
          <Table.Thead>
            <Table.Tr>
              {token.header.map((cell, i) => (
                <th key={i}>{convertTokens(cell, options)}</th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {token.rows.map((row, i) => (
              <Table.Tr key={i}>
                {row.map((cell, j) => (
                  <Table.Td key={j}>{convertTokens(cell, options)}</Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      );

    case 'strong':
      return (
        <Text key={key} fw={fontWeightBold} span>
          {convertTokens(token, options)}
        </Text>
      );
    case 'em':
      return (
        <Text key={key} fs="italic" span>
          {convertTokens(token, options)}
        </Text>
      );
    case 'codespan':
      return (
        <Code key={key}>{token.raw.substring(1, token.raw.length - 1)}</Code>
      );
    case 'br':
      return '\n';
    case 'del':
      return (
        <Text key={key} td="line-through" span>
          {convertTokens(token, options)}
        </Text>
      );
    case 'link': {
      const to = resolveUrl(token.href, options);
      if (!to) return convertTokens(token, options);
      return (
        <Link key={key} to={to}>
          {convertTokens(token, options)}
        </Link>
      );
    }
    case 'image':
      return (
        <Image
          key={key}
          src={resolveUrl(token.href, options)}
          alt={token.title}
        />
      );
    case 'paragraph':
      return (
        <Text key={key} size="sm">
          {convertTokens(token, options)}
        </Text>
      );
    case 'text':
      return token.tokens ? convertTokens(token, options) : token.raw;
    case 'ref':
      return ['[', <LinkReference key={key} token={token} />, ']'];
    default:
    case 'html':
    case 'space':
      return token.raw;
  }
}

export function parseMarkdown(src, options = {}) {
  try {
    const opt = { extensions, gfm: true };
    const tokens = Lexer.lex(src, opt);
    return convertTokens({ tokens }, options);
  } catch (e) {
    console.error(e);
    return src;
  }
}

export function parseTokens(src) {
  try {
    const opt = { extensions, gfm: true };
    const tokens = Lexer.lex(src, opt);
    return walkTokens(tokens, (t) => t);
  } catch (e) {
    console.error(e);
    return src;
  }
}
