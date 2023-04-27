import React, { useContext } from 'react';
import { AppContext } from 'App/libs/provider';
import { Link } from 'App/libs/router';

function scrollTo(selector, offset) {
  const element = document.querySelector(selector);
  const position = element.getBoundingClientRect().top - offset;
  window.scrollBy({ top: position, behavior: 'smooth' });
}

export function LinkReference({ token }) {
  const { setReference } = useContext(AppContext);
  return (
    <Link
      onClick={() => {
        setReference(parseInt(token.text));
        scrollTo(`#result-${token.text}`, 80);
      }}
    >
      {token.text}
    </Link>
  );
}
