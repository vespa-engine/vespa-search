export const ALL_NAMESPACES = Object.freeze([
  { id: 'open-p', name: 'Documentation', icon: 'book' },
  { id: 'cloud-p', name: 'Cloud Documentation', icon: 'cloud' },
  { id: 'vespaapps-p', name: 'Sample Apps', icon: 'vial' },
  { id: 'blog-p', name: 'Blog', icon: 'blog' },
  { id: 'pyvespa-p', name: 'PyVespa', icon: 'fab-python' },
]);

export const NAMESPACES_BY_ID = Object.freeze(
  ALL_NAMESPACES.reduce(
    (object, namespace) => ({ ...object, [namespace.id]: namespace }),
    {}
  )
);
