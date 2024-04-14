import Image from "next/image";
import styles from "../styles/page.module.css";
import React from "react";

export function Headline(props) {
  console.log('Props: ', props.title);
  return (
    <div> 
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/{props.page}.js</code>
        </p>
      </div>
        <h1 className={styles.title}>{props.page} page</h1>
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
    </div>          
  );
}


