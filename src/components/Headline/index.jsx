import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  console.log('Headline props:', props);
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>Get started by the below Lists of {props.items.length}</p>
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


