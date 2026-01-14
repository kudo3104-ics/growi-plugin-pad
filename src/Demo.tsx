import React from 'react';

import ReactDOM from 'react-dom/client';

import { Pad } from './Pad';

const href = 'https://growi.org/';

const PadComponent = Pad(() => <a href={href}>HelloPAD, GROWI</a>);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PadComponent
      href={href}
    >HelloPad, GROWI</PadComponent>
  </React.StrictMode>,
);
