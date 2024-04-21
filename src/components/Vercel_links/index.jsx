import styles from 'src/components/Vercel_links/Vercel_links.module.css';

export function Vercel_links({items, handleBgColor, bgColor, reduceItems, addItems}) {
  return (  
    <div className={styles.grid} style={{ backgroundColor: bgColor }}>  
      <button onClick={handleBgColor}>Change background color</button>
      <button onClick={reduceItems}>Reduce Link items</button>
      <button onClick={addItems}>Add Link items</button>

      {items && items.map((item) => {
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
    
