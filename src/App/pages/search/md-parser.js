import React from 'react';
import { Lexer } from 'marked';
import {
  Blockquote,
  Code,
  Divider,
  Image,
  Table,
  Title,
  Text,
  List,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import PrismRenderer from 'prism-react-renderer/prism';
import { Link } from 'App/libs/router';
import { fontWeightBold } from 'App/styles/common.js';

window.Prism = PrismRenderer;
import('prismjs/components/prism-java');

const refRegex = /^\[([0-9]+)]+/;
const extensions = Object.freeze({
  inline: [
    (src) => {
      const match = refRegex.exec(src);
      if (match) return { type: 'ref', raw: match[0], text: match[1] };
    },
  ],
});

function scrollTo(selector, offset) {
  const element = document.querySelector(selector);
  const position = element.getBoundingClientRect().top - offset;
  window.scrollBy({ top: position, behavior: 'smooth' });
}

const convertTokens = ({ tokens }) =>
  tokens.map((token, i) => convert(token, `${token.type}-${i}`));

// https://github.com/markedjs/marked/blob/7c1e114f9f7949ba4033366582d2a4ddf09e85af/src/Tokenizer.js
function convert(token, key) {
  switch (token.type) {
    case 'code':
      return (
        <Prism key={key} language={token.lang}>
          {token.text}
        </Prism>
      );
    case 'blockquote':
      return <Blockquote key={key}>{convertTokens(token)}</Blockquote>;
    case 'heading':
      return (
        <Title key={key} order={token.depth}>
          {convertTokens(token)}
        </Title>
      );
    case 'hr':
      return <Divider key={key} />;
    case 'list':
      return (
        <List key={key} type={token.ordered ? 'ordered' : 'unordered'}>
          {token.items.map((item, i) => (
            <List.Item key={i}>{convertTokens(item)}</List.Item>
          ))}
        </List>
      );
    case 'table':
      return (
        <Table key={key}>
          <thead>
            <tr>
              {token.header.map((cell, i) => (
                <td key={i}>{convertTokens(cell)}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {token.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{convertTokens(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      );

    case 'strong':
      return (
        <Text key={key} fw={fontWeightBold} span>
          {convertTokens(token)}
        </Text>
      );
    case 'em':
      return (
        <Text key={key} italic span>
          {convertTokens(token)}
        </Text>
      );
    case 'codespan':
      return <Code key={key}>{token.text}</Code>;
    case 'br':
      return '\n';
    case 'del':
      return (
        <Text key={key} strikethrough span>
          {convertTokens(token)}
        </Text>
      );
    case 'link':
      return (
        <Link key={key} to={token.href}>
          {convertTokens(token)}
        </Link>
      );
    case 'image':
      return <Image key={key} src={token.href} alt={token.title} />;
    case 'paragraph':
      return <p key={key}>{convertTokens(token)}</p>;
    case 'text':
      return token.tokens ? convertTokens(token) : token.raw;
    case 'ref':
      return [
        '[',
        <Link key={key} onClick={() => scrollTo(`#result-${token.text}`, 80)}>
          {token.text}
        </Link>,
        ']',
      ];
    default:
    case 'html':
    case 'space':
      return token.raw;
  }
}

export function parseMarkdown(src) {
  try {
    const opt = { extensions, gfm: true };
    const tokens = Lexer.lex(src, opt);
    return convertTokens({ tokens });
  } catch (e) {
    console.error(e);
    return src;
  }
}
