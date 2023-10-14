import { useState, useEffect, useRef } from 'react';

function useClickOutside(initialState = false) {
  const [isOutsideClick, setIsOutsideClick] = useState(initialState);
  const elementRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setIsOutsideClick(true);
      } else {
        setIsOutsideClick(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return [elementRef, isOutsideClick];
}

export default useClickOutside;
