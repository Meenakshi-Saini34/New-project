import React from "react";
import Task from "./Task";

const List = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <div>
       <ul className="d-flex gap-4 justify-content-center flex-wrap col-6 mx-auto list-unstyled  mt-5 ">
      {tasks.map((task, index) => (
        <li className="btn btn-light border-1 border w-100 " key={index}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default List;
