import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  return (
    <div className="card rounded-4 col-6 mx-auto">
      <label htmlFor="task" className="fw-bold fs-4">
        Enter new Task
      </label>
      <input
        className="form-control mb-3"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        className="btn btn-info text-white"
        onClick={() => {
          onAddTask(task);
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
