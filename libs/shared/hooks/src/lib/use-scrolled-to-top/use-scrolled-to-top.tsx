import { useCallback, useState } from 'react';

import { useEvent } from 'react-use';

export const useScrolledToTop = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(
    window.scrollY === 0
  );
  const onScrollHandler = useCallback(() => {
    setIsScrolledToTop(window.scrollY === 0);
  }, []);

  useEvent('scroll', onScrollHandler);
  return isScrolledToTop;
};

export default useScrolledToTop;
