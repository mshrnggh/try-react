//import "../styles/globals.css";//_app.jsにてMyApp設定済み
import { Main } from "src/components/Main";
import styles from "src/components/Main/Main.module.css";
import { useState, useCallback } from "react";

export default function Page() {
  const [arry, setArry] = useState([]);
  console.log("arry1",arry);
  const handleAddList = useCallback(() => {
    setArry([...arry, arry.length + 1]);
    console.log("arry2",arry);  
  },[arry]);

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
      <Main page="index"/>
    </div>
  );
}