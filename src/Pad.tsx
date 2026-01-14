import React from 'react';

import './Pad.css';

export const Pad = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    try {
      return (
        <>
          <ul>
          <li>children:{children}</li>
          <li>className:{className}</li>
          <li>...props:{...props}</li>
          </ul>
        </>
      );
    }
    catch (err) {
      // console.error(err);
    }
    // Return the original component if an error occurs
    return (
      <Tag {...props}>{children}</Tag>
    );
  };
};

