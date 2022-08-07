import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { TodoItem } from "./TodoItem";

export const TodoList: FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <ul className='todoList'>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
};
