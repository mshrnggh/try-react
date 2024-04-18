import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";
import React, { useState, useCallback } from "react";

export function Headline(props) {
  const  [text, setText] = useState('input text here');
  console.log('Input Text:', text);
  const handleInput = useCallback((e) => {
    if(e.target.value.length > 15) {
      alert('Max length is 15 characters.');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return (
    <div> 
      <div className={styles.description}>
        <p>Get started by editing {props.children}</p>
        <h1 className={styles.title}>{props.page} page</h1>
      </div>
      <input className={styles.inputStyle} type="text" value={text} onChange={handleInput} />  
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


