import React from 'react';
import { Link } from 'react-router-dom';

import noImage from '../assets/no-image-darth.png';

export const LRCard = props => {
  const item = props.item;
  const image = item.image || noImage;
  return (
    <div className={`lr-card ${props.size}`}>
      <img className="lr-card-photo" src={image} alt={item.name} />
      <div className="lr-card-details">
        <div className="lr-card-title">
          <Link
            to={`/${props.page}/${item.id}`}
            className="heading-starwars text-highlight "
          >
            {item.name}
          </Link>
        </div>
      </div>
    </div>
  );
};
