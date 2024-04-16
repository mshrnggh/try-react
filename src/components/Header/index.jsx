import Link from 'next/link';
import styles from 'src/components/Header/Header.module.css';

export function Header() {
  return (
     <header className={styles.header}>
      <Link href="/page" className = {styles.anchor} prefetch={true}> Index </Link>
      <Link href="/about" className = {styles.anchor} prefetch={true}> About </Link>
    </header>
  );
}