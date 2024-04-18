import styles_Main from "src/components/Main/Main.module.css";
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";
import { useEffect, useState, useCallback } from "react";

export default function About({}) {
  const [text, setText] = useState('input new text here');
  const [list, setList] = useState([]); 

  const addList = useCallback(() => { 
    if(list.some(item => item === text)) {
      alert('This text is already in the list!');
      return;
    } setList((list)=>[...list, text]);
  },[list, text]);  
  
  const handleInput = useCallback((e) => {
    if(e.target.value.length > 20) {
      alert('Max length is 20 characters.');
      return;
    }
    setText(e.target.value);
  }, []);

  useEffect(() => {
    console.log('list:', list);
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('useEffect unmounted.');
      document.body.style.backgroundColor = '';
    };
  },[list]);
  
  const [isShow, setIsShow] = useState(true);
  const handleDisplay = useCallback(() => { setIsShow(!isShow); });

  return (
    <main className={styles_Main.main}>
      <input className={styles_Main.inputStyle} type="text" value={text} onChange = {handleInput} />  
      {isShow ? 
      <div>
        <h2>Title of list:</h2>
         <ul> {list.map((item, index) => (<li key={index}>{item}</li>))}
         </ul>
      </div> : <h2>No display</h2>}
      <button className={styles_Main.animatedText} onClick={addList}>
        Add list!
      </button>
      <button className={styles_Main.animatedText} onClick={handleDisplay}>
        {isShow ? "Click for hide!" : "Click for display!"}
      </button>
      <Headline page="about">
        <code className={styles_Main.code}> src/app/about.js</code>
      </Headline>
     
      <Vercel_links/>    
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
  );
}
