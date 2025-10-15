import { ListChecks } from "lucide-react";
import * as C from "./App.styles";

const App = () => {
  return <C.Container>
    <C.Area>
        <h1>Lista de Tarefas <ListChecks size={24} /></h1>
    </C.Area>
  </C.Container>;
};

export default App;
