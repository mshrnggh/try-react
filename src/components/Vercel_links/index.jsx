import styles from 'src/components/Vercel_links/Vercel_links.module.css';

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

export function Vercel_links() {
  return (  
    <div className={styles.grid}> 
      { ITEMS.map((item) => {
        return (
        <a key={item.title} href={item.href} className={styles.card}
          target="_blank" rel="noopener noreferrer"
        > <h3>{item.title}</h3> <p>{item.description}</p>
        </a>
        );
      })}
    </div>
  );    
}
    
