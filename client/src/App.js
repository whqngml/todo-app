import { useState, useRef, useEffect } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "../src/styles/common.scss";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const todoId = useRef(4);

  useEffect(() => {
    console.log("첫 렌더링 완료!");

    const getTodos = async () => {
      let result = await axios.get("http://49.50.175.211:8080/todos");
      console.log(result);
      setTodoItems(result.data);
    };
    getTodos();
  }, []);

  // AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
  // 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
  // => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함
  const addItem = (newItem) => {
    const postTodo = async () => {
      let create = await axios.post("http://49.50.175.211:8080/todo", {
        title: newItem.title,
      });
      console.log("창조", create.data);
      return setTodoItems([...todoItems, create.data]); // setTodoItems(todoItems.concat(newItem))
    };
    // newItem - {id: xx, title: xx, done: false}
    // newItem.id = todoId.current++; // key를 위한 id 설정
    // newItem.done = false; // done 초기화
    // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    // return setTodoItems([...todoItems, newItem]); // setTodoItems(todoItems.concat(newItem))
    postTodo();
  };

  const deleteItem = (targetItem) => {
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    console.log(newTodoItems);
    setTodoItems(newTodoItems);
    // console.log("타겟", targetItem);
    const deleteTodo = async () => {
      let destroy = await axios.delete(
        `http://49.50.175.211:8080/todo/${targetItem.id}`
      );
      console.log(destroy);
      console.log("삭제", targetItem);
    };
    deleteTodo();
  };

  // API를 이용해서 update하려면
  // (1) server/routes/todo.js API를 이용해 서버 데이터를 업데이트 한 후
  // (2) 변경된 내용을 화면에 다시 출력하는 작업
  const updateItem = async (targetItem) => {
    console.log(targetItem);
    await axios.patch(
      `http://49.50.175.211:8080/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className="App">
      <header className="Header">Todo List</header>
      <AddTodo addItem={addItem} />
      <div className="left-todos">❤️ {todoItems.length} Todos</div>
      {todoItems.length > 0 ? (
        todoItems.map((item) => {
          // console.log(item); // {id: 1, title: 'My Todo1', done: false}
          return (
            <Todo
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          );
        })
      ) : (
        <p className="empty-todos">Todo를 추가해주세요🔥</p>
      )}
    </div>
  );
};

export default App;
