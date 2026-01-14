import React from 'react';

import './Pad.css';

export const Pad = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    try {
      if (className !== 'language-pad') {
        return (
          <Tag {...props}>{children} NOT pad, className={className}</Tag>
        );
      }
      return (
        <Tag {...props}>{children} this is pad, className={className}</Tag>
      );
    }
    catch (err) {
      return (
        <Tag {...props}>{children} err</Tag>
      );
    }
  };
};

