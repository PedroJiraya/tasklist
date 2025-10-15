import { useState, KeyboardEvent } from "react";
import * as C from "./style";

export const AddArea = ({onEnter}:{onEnter: (taskName:string) => void}) => {

  const [inputText, setInputText] = useState("");

  function handleKeyEnter(e:KeyboardEvent) {

    if(e.key === 'Enter' && inputText !== ''){
        onEnter(inputText)
        console.log(e.key)
        console.log(inputText)
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="insira uma tarefa..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyEnter}
      />
    </C.Container>
  );
};
