import { useState, useCallback } from "react";

export const useAddList = () => {
  const [text, setText] = useState('input new text');
  const [list, setList] = useState([]); 

  const addList = useCallback(() => {  
    if(list.includes(text)) {
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
  }, [setText]);
 
  return {text, list, addList, handleInput}; 
};
