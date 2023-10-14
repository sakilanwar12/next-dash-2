import { useEffect, useState } from 'react';

const useIsMobile = (width)=> {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= width);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1140);
    }

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
