import React from 'react';

import './Pad.css';

const API_URL: string = 'http://10.20.40.64:8070/api/pdl/form'

export const Pad = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    try {
      if (className !== 'language-pad') {
        return (
          <Tag {...props}>{children}</Tag>
        );
      }

      const layoutName = 'コンパクト';

      fetch(API_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({ LayoutName: layoutName, Text: children })
      })
      .then((response: Response) => {
          if (!response.ok) {
              return 'net work resonse was not ok';
          }
          return response.text();
      })
      .then(svg => {
          return svg;
      })
      .catch((error: Error) => {
          return 'error: ' + error;
      });
    }
    catch (err) {
      return (
        <Tag {...props}>{children} err</Tag>
      );
    }
  };
};

