import styles_Main from "src/components/Main/Main.module.css";
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";
import { useEffect, useState } from "react";

export default function About() {
  const increment = (e) => { 
    setCount(count => count + 1);
  };  
  const [count, setCount] = useState(1); 
 
  useEffect(() => {
    console.log('count:', count);
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('useEffect unmounted.');
      document.body.style.backgroundColor = '';
    };
  },[count]);

  return (
    <main className={styles_Main.main}>
      <Headline page="about">
        <code className={styles_Main.code}> src/app/about.js</code>
      </Headline>
      <h2>Count: {count}</h2>
      <button className={styles_Main.animatedText} onClick={(e)=>increment()}>
        Click me for count-up!
      </button>
     
      <Vercel_links/>    
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
  );
}
