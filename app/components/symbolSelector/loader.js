import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={32}
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect ry="0" rx="0" x="0" y="0" width="100" height="100" />
  </ContentLoader>
);
