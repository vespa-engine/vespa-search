import React from 'react';
import { AbstractFeedback } from 'App/pages/search/abstract-container/abstract/abstract-feedback.js';
import { Typography } from 'App/pages/search/typography/index.js';
import { AbstractQuestions } from 'App/pages/search/abstract-container/abstract/abstract-questions/index.js';
import { AbstractAbout } from 'App/pages/search/abstract-container/abstract/abstract-about.js';
import { AbstractTitle } from 'App/pages/search/abstract-container/abstract/abstract-title.js';
import { AbstractContent } from 'App/pages/search/abstract-container/abstract/abstract-content.js';
import { AbstractDisclaimer } from 'App/pages/search/abstract-container/abstract/abstract-disclaimer.js';
import { useConsent } from 'App/pages/search/abstract-container/abstract/use-consent.js';

export function Abstract() {
  const { value } = useConsent();

  return (
    <Typography>
      <AbstractTitle />
      {value ? (
        <>
          <AbstractContent />
          <AbstractFeedback />
          <AbstractAbout />
          <AbstractQuestions />
        </>
      ) : (
        <AbstractDisclaimer />
      )}
    </Typography>
  );
}
