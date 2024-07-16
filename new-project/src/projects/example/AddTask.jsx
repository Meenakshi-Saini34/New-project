import React, {useState} from "react";

const AddTask = ({onAddTask}) => {
  const [task, setTask] = useState("");
  return (
    <div className="col-5  mx-auto ">
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
        Add new value
      </button>
    </div>
  );
};

export default AddTask;
