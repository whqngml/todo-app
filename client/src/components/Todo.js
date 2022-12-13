import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // { id: 1, title: 'todo1', done: false, }
  const { id, title, done } = item;
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

  // 체크박스 업데이트
  // done: ture -> false / done: false -> true
  const checkBoxHandler = () => {
    // todoItem.done = !todoItem.done;
    // setTodoItem(todoItem);
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

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onClick={checkBoxHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        onChange={editEventHandler}
        readOnly={readOnly}
        onClick={onInputClick}
        onKeyPress={onEnterKeyPress}
      />
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;
