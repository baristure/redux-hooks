import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTodoAction } from "../redux";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const boundAddTodo = (todo) => dispatch(addTodoAction(todo));
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") return;
    boundAddTodo({
      id: uuidv4(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div d-flex justify-content-between input-group-sm">
        <input
          type="text"
          name="todo"
          className="form-control p-2"
          placeholder="Add a new todo"
          value={todo}
          onChange={onChange}
        />
        <button className="btn btn-success p-1" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
