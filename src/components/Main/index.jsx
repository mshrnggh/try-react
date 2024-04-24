import styles from "src/components/Main/Main.module.css";
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";
import { useCallback, useState, useEffect } from 'react';

const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentaion \u2194',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn \u2192',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Examples →',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy →',
    description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

export function Main(props) {
  console.log('Main props:', props);
    useEffect(() => {
      document.body.style.backgroundColor = 'lightgreen ';
      return () => { document.body.style.backgroundColor = '';}
    }, []);

    const [bgColor, setBgColor] = useState('lightblue');
    const handleBgColor = () => {
      setBgColor(bgColor === 'lightblue' ? 'gold' : 'lightblue');
    };
    const [items, setItems] = useState(ITEMS);
    const reduceItems = useCallback(() => {
      setItems((items) =>  {if (items.length > 1) {
        return items.slice(0, items.length -1);
      } else { return items; }
    });}, [items]);

    const addItems = useCallback(() => {
      setItems((items) => {if (items.length < 4) { 
        return [...items, ITEMS[items.length]];
        } else { return items; }
    }); }, [items]);

     return (
       <main className={styles.main}>
          <Headline page={props.page} items={items}>
            <code className={styles.code}> src/app/{props.page}.js</code>
          </Headline>
          <Vercel_links items={items} bgColor={bgColor} addItems={addItems}
          reduceItems={reduceItems} handleBgColor={handleBgColor}/>   
          <p style = {{marginTop: '2rem'}}></p>
          <Vercel_footer/>
       </main>
    );
}