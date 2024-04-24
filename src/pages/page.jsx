import styles_Main from "src/components/Main/Main.module.css";
import { Main } from "src/components/Main";
import styles from "src/components/Main/Main.module.css";
import { useState, useCallback } from "react";
import { useChangeBgcolor } from "src/components/ChangeBgcolor";

export default function Page({addlist, displayList}) {
  useChangeBgcolor();
  const [arry, setArry] = useState([]);
  const handleAddList = useCallback(() => {
    setArry([...arry, arry.length + 1]);
  },[arry]);
  const {isShow, handleDisplay} = displayList;
  const {list, text, handleInput, addList} = addlist;

  const handleDeleteList = useCallback(() => {  
    setArry(arry.slice(0, arry.length - 1));
    console.log(arry);
  }, [arry]);

  return (
    <div>
      <button className={styles.buttonStyle} onClick={handleAddList}>Add List</button>
      <button className={styles.buttonStyle} onClick={handleDeleteList}>Delete List</button>
      <ul> 
        {arry.map((item)=>{return <li key={item}>{`List No.:`+item}</li>;})} 
      </ul>
      
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
      <Main page="index"/>
    </div>
  );
}