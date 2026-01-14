import React from 'react';

import './Pad.css';

export const Pad = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    try {
      if (className !== 'pad') {
        return (
          <Tag {...props}>{children} NOT pad, className={className}</Tag>
        );
      }
      return (
        <ul>
        <li>children:{children}</li>
        <li>className:{className}</li>
        <li>...props:{...props}</li>
        </ul>
      );
    }
    catch (err) {
      return (
        <Tag {...props}>{children} err</Tag>
      );
    }
  };
};

