 import { useEffect } from 'react';
 
 export const useChangeBgcolor = () => useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('useEffect unmounted.');
      document.body.style.backgroundColor = '';
    };
  },[]);
  