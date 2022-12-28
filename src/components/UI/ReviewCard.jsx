import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Button from './Button';

function ReviewCard({ image, name, job, text, onPrev, onNext, onRand }) {
  return (
    <article className="review">
      <figure className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </figure>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <Button onClick={onPrev} btn="prev-btn">
          <FaChevronLeft />
        </Button>
        <Button onClick={onNext} btn="next-btn">
          <FaChevronRight />
        </Button>
      </div>
      <Button onClick={onRand} btn="random-btn">
        Surprise me
      </Button>
    </article>
  );
}

export default ReviewCard;
