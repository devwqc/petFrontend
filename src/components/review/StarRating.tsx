import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length: number) => [...Array(length)];

interface StarProps {
  selected?: boolean;
  onSelect?: () => void;
}

interface StarRatingProps {
  className?: string;
  rating?: number;
  editable?: boolean;
}

export default function StarRating({ className, rating, editable }: StarRatingProps) {
  const [stars, setStars] = useState(rating || 0);

  const TOTAL_STARS = 5;

  const Star = ({ selected, onSelect }: StarProps) => (
    <FaStar className={className} color={selected ? '#FAF60D' : '#D9D9D9'} onClick={onSelect} />
  );

  const handleSelect = (i: number) => {
    if (editable) {
      setStars(i + 1);
    }
  };

  return (
    <>
      {createArray(TOTAL_STARS).map((_, i) => (
        <Star key={i} selected={stars > i} onSelect={() => handleSelect(i)} />
      ))}
    </>
  );
}
