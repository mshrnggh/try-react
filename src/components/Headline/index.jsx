import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";
import React from "react";

export function Headline(props) {
  return (
    <div> 
      <div className={styles.description}>
        <p>
          Get started by editing {props.children}      
        </p>
        {/* <button onClick={props.onClick}>BUTTON</button> */}
      </div>
        <h1 className={styles.title}>{props.page} page</h1>
        
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={300}
            height={100}
            priority
          />
        </div>
    </div>          
  );
}


