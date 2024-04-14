import styles from "../styles/page.module.css";
import "../styles/globals.css";
import { Vercel_links } from "../components/Vercel_links";
import { Vercel_footer } from "../components/Vercel_footer";
import { Headline } from "../components/Headline";

export default function About() {
  return (
    <main className={styles.main}>
      <Headline page="about"/>
      <Vercel_links/>   
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
  );
}
