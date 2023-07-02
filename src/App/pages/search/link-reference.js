import React from 'react';
import { useSearchContext } from 'App/libs/provider';
import { Link } from 'App/libs/router';

export function LinkReference({ token }) {
  const selectHit = useSearchContext((ctx) => ctx.selectHit);
  return (
    <Link onClick={() => selectHit(parseInt(token.text))}>{token.text}</Link>
  );
}
