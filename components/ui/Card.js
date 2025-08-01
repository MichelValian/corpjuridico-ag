import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`bg-white ${className}`}>
      {children}
    </div>
  );
}
