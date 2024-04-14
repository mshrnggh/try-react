import styles from "../styles/page.module.css";
import React, { useEffect } from 'react';
import "../styles/globals.css";
import { Vercel_links } from "../components/Vercel_links";
import { Vercel_footer } from "../components/Vercel_footer";
import { Headline } from "../components/Headline";

export default function About() {
   useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // ページがバックグラウンドに移動したときの処理
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Headline 
        page="about" 
        num = {111} 
        arry={[1,2,3]}
        obj ={{name: 'John', age: 25}}
        boolean
        // compDOM = {<></></>} 
        // onClick={()=>alert("Button clicked!!")}
      >
        <code className={styles.code}> src/app/about.js</code>
      </Headline>
      <Vercel_links/>   
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
  );
}
