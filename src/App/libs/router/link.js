import React from 'react';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

export const isInternalLink = (link) => {
  if (!link) return false;
  return !/^[a-z]+:\/\//.test(link);
};

export function Link({ to, api = false, ...props }) {
  const internal = !api && isInternalLink(to);
  if (!props.download && to && internal)
    return <RouterLink to={to} {...props} />;

  const fixedProps = Object.assign(
    to ? { href: (api ? window.config.api : '') + to } : {},
    to && !internal && { target: '_blank', rel: 'noopener noreferrer' },
    props
  );
  return <a {...fixedProps} />;
}

export function NavLink({ to, ...props }) {
  if (isInternalLink(to)) return <RouterNavLink to={to} {...props} />;
  delete props.end;
  return <a href={to} target="_blank" rel="noopener noreferrer" {...props} />;
}
