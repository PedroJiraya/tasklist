import { Lista } from "../../types/types";
import { useState } from "react";
import * as C from "./styles";

interface Props {
  item: Lista;
  onTogle:(id: number | string, newTogle: boolean) => void
}

export const ListItem = ({ item,onTogle }: Props, ) => {
  

  return (
    <C.Container done={item.done}>
      <input 
        type="checkbox" 
        checked={item.done} 
        onChange={e => onTogle(item.id, e.target.checked) } // ou onChange={(e) => setIsChecked(e.target.checked)
        
      />
      <label>{item.name} - {item.done.toString()}</label>
    </C.Container>
  );
};
