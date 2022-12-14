import { useState } from "react";
import "../styles/Todo.scss";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // { id: 1, title: 'todo1', done: false, }
  const { id, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
    console.log(todoItem);
  };

  const onInputClick = () => {
    setReadOnly(false);
  };

  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // checkbox 업데이트
  // done: true -> false, fasle, -> true
  const checkboxEventHandler = (e) => {
    // rest: id, title 정보
    const { done, ...rest } = todoItem; // { id: 1, title: 'todo1', done: false, }
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  // title input 커서가 깜빡인다고 수정이 가능한것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
  const editEventHandler = (e) => {
    setTodoItem({
      id: todoItem.id,
      title: e.target.value,
      done: todoItem.done,
    });
  };

  // 강사님의 방법
  // const editEventHandler = (e) => {
  //   // rest: id, done 정보
  //   const { title, ...rest } = todoItem; // { id: 1, title: 'todo1', done: false, }

  //   setTodoItem({
  //     title: e.target.value,
  //     ...rest,
  //   });
  // };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onClick={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        className="TodoInput"
        value={todoItem.title}
        onChange={editEventHandler}
        readOnly={readOnly}
        onClick={onInputClick}
        onKeyPress={onEnterKeyPress}
      />
      <button onClick={onDeleteBtnClick}>🗑️</button>
    </div>
  );
};

export default Todo;
