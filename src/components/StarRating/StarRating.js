import React, { useMemo } from 'react';
import classes from './StarRating.module.css';

function Star({ number, stars, styles }) {
  const halfNumber = number - 0.5;
  return stars >= number ? (
    <img src="/star-full.svg" style={styles} alt="Full Star" />
  ) : stars >= halfNumber ? (
    <img src="/star-half.svg" style={styles} alt="Half Star" />
  ) : (
    <img src="/star-empty.svg" style={styles} alt="Empty Star" />
  );
}

export default function StarRating({ stars, size }) {
  // Memoize styles so they only change when 'size' changes.
  const styles = useMemo(() => ({
    width: `${size}px`,
    height: `${size}px`,
    marginRight: `${size / 6}px`,
  }), [size]);

  const starElements = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((number) => (
        <Star key={number} number={number} stars={stars} styles={styles} />
      )),
    [stars, styles]
  );

  return <div className={classes.rating}>{starElements}</div>;
}
