import { useEffect, useState } from 'react';

const useAnimation = (duration: number = 300) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, duration);
  };

  return { isAnimating, startAnimation };
};

export default useAnimation;