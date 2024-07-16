import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="d-flex gap-4 justify-content-center flex-wrap col-6 mx-auto list-unstyled p-5 shadow rounded-4 mt-5">
      {tasks.map((task, index) => (
        <li className="btn btn-light border-1 border w-100" key={index}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;



// Redux => managing and updating application using events called action.  manage state globaly in react.