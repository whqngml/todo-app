import { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My Todo1",
      done: false,
    },
    {
      id: 2,
      title: "My Todo2",
      done: false,
    },
    {
      id: 3,
      title: "My Todo3",
      done: true,
    },
  ]);

  return (
    <div className="App">
      <div>
        {todoItems.map((item) => {
          console.log(item);
          return <Todo key={item.id} todo={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
