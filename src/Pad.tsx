import React from 'react';
// import React, { useEffect, useState } from 'react';

import './Pad.css';

const API_URL: string = 'http://10.20.40.64:8070/api/pdl/form'

export const Pad = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  // const [svgContent, setSvgContent] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);

  return ({ children, className, ...props }) => {
    try {
      if (className !== 'language-pad') {
        return (
          <Tag {...props}>{children}</Tag>
        );
      }
      return (<div>hoge {children} hoge</div>);

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
              console.log('net work resonse was not ok');
              return 'net work resonse was not ok';
          }
          // console.log('response was ok');
          return response.text();
      })
      .then((svg: string) => {
          console.log('svg!');
          return svg;
      })
      .catch((error: Error) => {
          console.log('error');
          console.log(error);
          return 'error: ' + error;
      });
    }
    catch (err) {
      console.log('error2');
      console.log(err);
      return (
        <Tag {...props}>{children} err</Tag>
      );
    }
  };
};

