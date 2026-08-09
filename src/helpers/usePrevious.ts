import { useEffect, useRef } from 'react';

// @see: https://usehooks.com/usePrevious/

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
