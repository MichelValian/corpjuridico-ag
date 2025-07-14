import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`className="button-default" ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
