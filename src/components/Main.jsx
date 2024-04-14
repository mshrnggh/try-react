import styles from "../styles/page.module.css";
import { Vercel_links } from "../components/Vercel_links";
import { Vercel_footer } from "../components/Vercel_footer";
import { Headline } from "../components/Headline";

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