
import { useState } from "react";


const MovieCard = ({ show }) => {
  const [imgSrc, setImgSrc] = useState(show.imageSet?.verticalPoster?.w360 || 'https://picsum.photos/200/300');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);}

  return (
    <div className="col-md-4 mb-5">
      <div
        className="card"
        style={{
          backgroundColor: '#ECEAEA',
          position: 'relative', // Needed for absolute positioning
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease',
          height: isExpanded ? 'auto' : '400px', // Expandable height
        }}
      >
        <img
          src={imgSrc}
          className="card-img-top"
          alt={show.title}
          style={{ height: '200px', objectFit: 'cover' }}
          onError={() => setImgSrc('https://picsum.photos/200/300')}
        />
        <div
          className="card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h5
            className="card-title"
            style={{
              fontSize: '1.2rem',
              fontWeight: '650',
              height: '50px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            
            }}
          >
            {show.title.replace(/#/g, '').trim()}
          </h5>
          <p
            className="card-description"
            style={{
              cursor: 'pointer',
              overflow: isExpanded ? 'visible' : 'hidden',
              textOverflow: isExpanded ? 'unset' : 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: isExpanded ? 'none' : 4,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {show.overview}
          </p>
          <button
            onClick={handleToggle}
            style={{
              fontSize: '0.8rem',
              padding: '0px 10px',
              position: 'absolute',
              right: '10px',
              bottom: '10px',
              backgroundColor: '#ECEAEA',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color:'blue'
            }}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default MovieCard;
