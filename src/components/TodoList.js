import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={todo.id}
        >
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={todo.complete}
              onChange={toggleTodo.bind(null, todo.id)}
            />
          </div>
          <span className={todo.complete ? "complete" : null}>{todo.name}</span>
          <span
            className="delete-button badge bg-danger"
            onClick={deleteTodo.bind(null, todo.id)}
          >X</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
