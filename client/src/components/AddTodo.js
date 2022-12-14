import { useState } from "react";
import "../styles/AddTodo.scss";

const AddTodo = (props) => {
  const { addItem } = props;

  // 사용자 입력을 저장할 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // props로 받아온 addItem 함수 실행
    const AddInput = todoItem.title.trim();
    if (AddInput === "") {
      alert("할일을 추가해 주세요");
      setTodoItem({ title: "" }); // input 초기화
      return;
    } else {
      addItem(todoItem); // {title: 'input입력값'}
      setTodoItem({ title: "" }); // input 초기화
    }
  };

  // Enter 키 입력시 아이템 추가
  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  document
    .querySelectorAll(".fast")
    .forEach(
      (button) =>
        (button.innerHTML =
          "<div><span>" +
          button.textContent.trim().split("").join("</span><span>") +
          "</span></div>")
    );

  return (
    <div className="AddTodo">
      <input
        className="AddInput"
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKeyPress}
      />
      <button onClick={onButtonClick} className="button fast white">
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
