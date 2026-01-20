import React, { useEffect, useState } from 'react';

import './Pad.css';

const API_URL: string = 'http://10.20.40.64:8070/api/pdl/form'

export const Pad = (Tag: React.FC<any>): React.FC<any> => {
  return ({ children, className, ...props }) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if (className === 'language-pad') {
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
              console.log('network resonse was not ok');
              throw new Error('network response was not ok');
          }
          return response.text();
        })
        .then((svg: string) => {
          console.log('svg!');
          setSvgContent(svg);
        })
        .catch((error: Error) => {
          console.log('error');
          console.log(error);
          setError(error.message);
        });
      }
    }, [children, className]);
  
    if (className !== 'language-pad') {
      return (
        <Tag {...props}>{children}</Tag>
      );
    }
  
    if (error) {
      return <div style={{ color: 'red' }}>svg fetch error: {error}</div>;
    }
  
    if (svgContent === null) {
      return <div>svg fetch now...</div>;
    }
  
    return svgContent;
  };
};
