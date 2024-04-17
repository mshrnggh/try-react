import styles from "src/components/Main/Main.module.css";
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";
import {useEffect } from "react";

export function Main(props) {
    useEffect(() => {
      console.log('useEffect in Main mounted.');
      document.body.style.backgroundColor = 'lightgreen ';
      
      return () => {  
        console.log('useEffect in Main unmounted.');
        document.body.style.backgroundColor = '';
      }
    }, []);

     return (
        <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}> src/app/{props.page}.js</code>
      </Headline>
      <Vercel_links/>   
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
    );
}