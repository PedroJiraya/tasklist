import { useState } from "react";
import { ListChecks } from "lucide-react";
import * as C from "./App.styles";
import { Lista } from "./types/types";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea"

const App = () => {
  const [list, setList] = useState<Lista[]>([
    { id: Date.now(), name: "Apender React", done: false },
    { id: Date.now(), name: "Aprender Back-End", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id:Date.now(),
      name:taskName,
      done:false
    })
    setList(newList)
  }


  return (
    <C.Container>
      <C.Area>
        <h1>
          Lista de Tarefas <ListChecks size={24} />
        </h1>
          <AddArea onEnter={handleAddTask}/>
        {list.map(item => (
          <ListItem key={item.id} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
