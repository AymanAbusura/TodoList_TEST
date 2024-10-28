import React, { useState } from 'react';

interface InputFormProps {
  addTodo: (task: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="Enter new task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default InputForm;