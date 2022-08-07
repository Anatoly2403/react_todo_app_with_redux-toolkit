import React, { FC } from "react";
import { useActions } from "../hooks/actions";
import { ITodo } from "../shared/interfaces";

interface IProps {
  todo: ITodo;
}

export const TodoItem: FC<IProps> = ({ todo }) => {
  const { removeTodo, toggleTodoComplete } = useActions();

  const inputChangeHandler = () => {
    toggleTodoComplete(todo.id);
  };

  const btnClickHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <li className='todoItem'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={inputChangeHandler}
      />
      <p>{todo.value}</p>
      <button onClick={btnClickHandler}>&times;</button>
    </li>
  );
};
