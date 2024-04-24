 import { useEffect, useMemo  } from 'react';
 import { useRouter } from 'next/router';
 
 export const useChangeBgcolor = () => {
    const router = useRouter();

    const bgColor = useMemo(() => {
      return router.pathname === "/about" ? 'lightblue': "beige";
    },[router.pathname])
    
    useEffect(() => {
      document.body.style.backgroundColor = bgColor;
      // document.body.style.backgroundColor = router.pathname === "/about" ? 'lightblue': "beige";
      //document.body.style.backgroundColor = router.pathname === "/page" ? 'beige': "";
      // if (router.pathname === "/about") {
      //   document.body.style.backgroundColor = 'lightblue';
      // } else if (router.pathname === "/page") {
      //   document.body.style.backgroundColor = 'beige';
      // } else {
      //   document.body.style.backgroundColor = '';
      // }
      
      return () => {
        document.body.style.backgroundColor = '';
      };
    },[bgColor]);
};