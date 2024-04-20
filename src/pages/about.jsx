import styles_Main from "src/components/Main/Main.module.css";
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";
import { useChangeBgcolor } from "src/components/ChangeBgcolor";

export default function About({addlist, displayList}) {
  useChangeBgcolor();
  const {isShow, handleDisplay} = displayList;
  const {list, text, handleInput, addList} = addlist;

  return (
    <main className={styles_Main.main}>
      <input className={styles_Main.inputStyle} type="text" 
       value={text} onChange={handleInput}/>  

      {isShow? 
      <div>
        <h2>Title of list:</h2>
        <ul> {list && Array.isArray(list) && list.map((item, index) =>  
          (<li key={index}>{item}</li>))}
        </ul>
      </div> : <h2>No display</h2>}
      <button className={styles_Main.animatedText} onClick={addList}>
        Add list
      </button>
      <button className={styles_Main.animatedText} onClick={handleDisplay}>
        {isShow ? "Click for hide" : "Click for display"}
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
