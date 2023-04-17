import { useState } from "react";

import "./App.css";

import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "comprar", done: false },
    { id: 2, name: "comprar pão", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <div className="container">
      <div className="area">
        <h1 className="header">Lista de Tarefas</h1>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
