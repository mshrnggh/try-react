import Link from 'next/link';
import styles from 'src/components/Header/Header.module.css';

// export function Header() {
//   return (
//      <header className={styles.header}>
//       <Link href="/page" className = {styles.anchor}> Index </Link>
//       <Link href="/about" className = {styles.anchor}> About </Link>
//     </header>
//   );
// }

export function Header() {
  const NAV_ITEMS = [
    {href: "/page", label:"Page"},
    {href: "/about", label: "About"},
  ]; 

  return (
     <header className={styles.header}>
       {NAV_ITEMS.map((item)=> {
        return (
          <Link key={item.href} href={item.href}>
            <span className={styles.anchor}>{item.label}</span>
          </Link>
        )
       })}
     
     </header>
  );
}