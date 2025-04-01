import { useEffect, useRef } from 'react';

type SlideInProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
};

const SlideIn = ({ children, direction = 'left', duration = 0.5 }: SlideInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.style.transition = `transform ${duration}s ease-in-out`;
      element.style.transform = 'translateX(0)';
    }
  }, [duration]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100%)';
      case 'right':
        return 'translateX(100%)';
      case 'top':
        return 'translateY(-100%)';
      case 'bottom':
        return 'translateY(100%)';
      default:
        return 'translateX(-100%)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getInitialTransform(),
        opacity: 0,
      }}
      className="slide-in"
    >
      {children}
    </div>
  );
};

export default SlideIn;