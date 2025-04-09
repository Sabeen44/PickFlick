
import React, { useState } from 'react';

const MovieCard = ({ show }) => {
  // Fallback for the image source
  const [imgSrc, setImgSrc] = useState(
    show?.imageSet?.verticalPoster?.w360 || 'https://picsum.photos/200/300'
  );

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ height: '100%' }}>
        {/* Image rendering with fallback on error */}
        <img
          src={imgSrc}
          className="card-img-top"
          alt={show?.title || 'Movie Poster'}
          style={{ height: '300px', objectFit: 'cover' }}
          onError={() => setImgSrc('https://picsum.photos/200/300')}
        />
        <div className="card-body">
          {/* Conditionally render title to handle missing title */}
          <h5 className="card-title">
            {show?.title ? show.title.replace(/#/g, '').trim() : 'Untitled'}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
