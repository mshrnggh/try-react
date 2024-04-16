import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";
import React from "react";

export function Headline(props) {
  console.log('Page: ', props.page);
  console.log('Num: ', props.num);
  console.log('Array: ', props.arry);
  console.log('Object: ', props.obj);
  console.log('Boolean: ', props.boolean);
  console.log('CompDOM: ', props.compDOM);
  // console.log('onClick: ', props.onClick);
  console.log('Children: ', props.children);
  return (
    <div> 
      <div className={styles.description}>
        <p>
          Get started by editing 
          {props.children}      
        </p>
        {/* <button onClick={props.onClick}>BUTTON</button> */}
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


