import { useState } from "react";
import { ListChecks } from "lucide-react";
import * as C from "./App.styles";
import { Lista } from "./types/types";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea"
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [list, setList] = useState<Lista[]>([
    { id: uuidv4(), name: "Apender React", done: false },
    { id: uuidv4(), name: "Aprender Back-End", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
     setList([...list,{id:uuidv4(),
      name:taskName,
      done:false}])
  }

  const handleTogleDone = (id: number | string, newTogle: boolean) => {
       
    setList(list.map(item => item.id === id ? {...item, done:newTogle} : item))
  }


  return (
    <C.Container>
      <C.Area>
        <h1>
          Lista de Tarefas <ListChecks size={24} />
        </h1>
          <AddArea onEnter={handleAddTask}/>
        {list.map(item => (
          <ListItem key={item.id} item={item} onTogle={handleTogleDone}/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
