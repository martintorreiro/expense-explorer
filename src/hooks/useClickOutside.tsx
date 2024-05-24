import { useEffect } from 'react';

interface useClickOutsideProps {
  ref:React.RefObject<HTMLDivElement>,
  callback: ()=>void
}

const useClickOutside = ( {ref, callback}:useClickOutsideProps ) => {
  
  
   useEffect(() => {

    const handleClickOutside = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)){
        callback()
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, []);   
  
};

export default useClickOutside;