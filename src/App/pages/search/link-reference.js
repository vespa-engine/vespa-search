import React from 'react';
import { ACTION } from 'App/libs/provider';
import { dispatch } from 'App/libs/provider/provider';
import { Link } from 'App/libs/router';

export function LinkReference({ token }) {
  return (
    <Link
      onClick={() => {
        dispatch(ACTION.SELECT_HIT, parseInt(token.text));
      }}
    >
      {token.text}
    </Link>
  );
}
