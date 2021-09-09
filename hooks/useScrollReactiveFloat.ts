import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useScrollReactiveFloat = (throttleDuration: number = 200) => {
  const [float, setFloat] = useState(false);

  useEffect(() => {
    if (window.scrollY !== 0) {
      setFloat(true);
    }
    const listener = throttle(() => {
      if (window.scrollY !== 0) {
        !float && setFloat(true);
      } else {
        float && setFloat(false);
      }
    }, throttleDuration);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [float]);

  return float;
};
