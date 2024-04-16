import styles from "src/components/Main/Main.module.css";
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";

export function Main(props) {
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