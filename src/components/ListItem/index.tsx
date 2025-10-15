import { Lista } from "../../types/types";
import { useState } from "react";
import * as C from "./styles";

interface Props {
  item: Lista;}

export const ListItem = ({ item }: Props, ) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={ () => setIsChecked(!isChecked) } // ou onChange={(e) => setIsChecked(e.target.checked)
        
      />
      <label>{item.name} - {item.done.toString()}</label>
    </C.Container>
  );
};
