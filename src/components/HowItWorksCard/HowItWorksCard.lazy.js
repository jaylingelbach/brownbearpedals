import React, { lazy, Suspense } from 'react';

const LazyHowItWorksCard = lazy(() => import('./HowItWorksCard'));

const HowItWorksCard = props => (
  <Suspense fallback={null}>
    <LazyHowItWorksCard {...props} />
  </Suspense>
);

export default HowItWorksCard;
