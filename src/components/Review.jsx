import React, { useState } from 'react';
import Data from '../Data';
import ReviewCard from '../components/UI/ReviewCard';

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = Data[index];

  const checkIndex = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  const prevHandler = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextHandler = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const randomHandler = () => {
    let randomNumber = Math.floor(Math.random() * Data.length);
    //* Avoid repetition of random numbers
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };

  return (
    <>
      <ReviewCard
        name={name}
        image={image}
        text={text}
        job={job}
        onPrev={prevHandler}
        onNext={nextHandler}
        onRand={randomHandler}
      />
    </>
  );
}

export default Review;
