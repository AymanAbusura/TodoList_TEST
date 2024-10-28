import React, { useState } from 'react';

interface TodoListProps {
  todos: { id: number; task: string; completed: boolean }[];
  toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="Todo todo-dropdown">
      <div className="dropdown-header" onClick={() => setShowDropdown(!showDropdown)}>
        <span className={`dropdown-arrow ${showDropdown ? 'up' : 'down'}`} />
        <span>What needs to be done?</span>
      </div>

      {showDropdown && todos.length > 0 && (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : undefined,
                color: todo.completed ? '#eeeeee' : '#000',
              }}
              className="todo-item"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="custom-checkbox"
              />
              {todo.task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;