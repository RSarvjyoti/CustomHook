import { useEffect } from 'react';

const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
 
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
 
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); 

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
