import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";
import React, { useState, useCallback } from "react";

export function Headline(props) {

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>Get started by editing {props.children}</p>
        <h1 className={styles.title}>{props.page} page</h1>
      </div>
      <div className={styles.center}>
        <Image
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


