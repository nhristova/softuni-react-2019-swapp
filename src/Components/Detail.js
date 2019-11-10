import React from 'react';
export const Detail = props => {
  return (
    <div>
      <span className="text-highlight-2">{props.type}: </span>
      <span className="text-highlight">{props.value}</span>
    </div>
  );
};
