import Image from "next/image";
import styles from "../styles/page.module.css";
import "../styles/globals.css";
import { Vercel_links } from "../components/Vercel_links";
import { Vercel_footer } from "../components/Vercel_footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/about.js</code>
        </p>
       
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Vercel_links/>   
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
  );
}

