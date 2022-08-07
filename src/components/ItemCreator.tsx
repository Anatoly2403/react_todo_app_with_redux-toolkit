import React, { ChangeEvent, FC, useState } from "react";
import { useActions } from "../hooks/actions";

export const ItemCreator: FC = () => {
  const [value, setValue] = useState("");
  const { addTodo } = useActions();

  const onClickHandler = () => {
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='itemCreator'>
      <input
        id='todoValue'
        type='text'
        value={value}
        onChange={changeHandler}
      />
      <button onClick={onClickHandler}>Add Todo</button>
    </div>
  );
};
