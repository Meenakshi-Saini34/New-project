import React, { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
  const [IsEdting, setIsEditing] = useState(false);
  let taskContent;

  if (IsEdting) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="btn btn-success text-white border-1 border m-2"
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="btn btn-secondary  text-white  border m-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <label htmlFor="" className="d-flex gap-4 align-content-center justify-content-center">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        <span>{taskContent}</span>
        <button
          className="btn btn-danger text-white border-1  border m-2"
          onClick={() => {
            onDelete(task.id);
            // console.log("deleted");
          }}
        >
          Delete
        </button>
      </label>
    </>
  );
};

export default Task;
