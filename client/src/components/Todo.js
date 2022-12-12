// 1. 함수형 컴포넌트
// 2. input(checkbox) 와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo (자식 컴포넌트) 1개를 랜더링

const Todo = ({ todo }) => {
  return (
    <div className={todo.title}>
      <input
        type="checkbox"
        id={todo.id}
        value={todo.title}
        defaultChecked={todo.done}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
    </div>
  );
};

export default Todo;

// 강사님 코드
// const Todo = ({ item }) => {
//     const { id, title, done } = item;

//     return (
//       <div className="Todo">
//         <input
//           type="checkbox"
//           id={`todo${id}`}
//           name={`todo${id}`}
//           value={`todo${id}`}
//           defaultChecked={done}
//         />
//         <label htmlFor={`todo${id}`}>{title}</label>
//       </div>
//     );
//   };

//   export default Todo;
