import React from 'react';

import './Pad.css';

declare const growiFacade : {
  react: typeof React;
};

const API_URL: string = 'http://10.20.40.64:8070/api/pdl/form'

export const Pad = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    try {
      if (className !== 'language-pad') {
        // console.log('NOT pad');
        // console.log(className);
        return (
          <Tag {...props}>{className}:{children}</Tag>
        );
      }

      // return <p >{children}</p>;

      const { react } = growiFacade;
      const { useEffect, useState } = react;

      const [ svgContent, setSvgContent ] = useState<string | TrustedHTML>('');

      const layoutName = 'コンパクト';

      const getSvg = async(pdl: string) => {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({ LayoutName: layoutName, Text: pdl })
        });
        const svg = await response.text() as string;
        setSvgContent(svg);
      };

      useEffect(() => {
        if (children !== null) getSvg(children)
      }, [children]);

      return (
        <div dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      );

    }
    catch (err) {
      return (
        <Tag {...props}>{children} err</Tag>
      );
    }
  };
};

