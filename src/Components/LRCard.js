import React from 'react';

export const LRCard = props => {
  const item = props.item;
  return (
    <div className={`lr-card ${props.size}`}>
      <img className="lr-card-photo" src={item.image} alt={item.name} />
      <div className="lr-card-details">
        <div className="lr-card-title">
          <a
            href={`/${props.page}/${item.id}`}
            className="heading-starwars text-highlight "
          >
            {item.name}
          </a>
        </div>
      </div>
    </div>
  );
};
