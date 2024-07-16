import React, { act, useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskAppReducer = () => {
  const [tasks, dispatch] = useReducer(reducerFunction, initialTasks);

  const handleAddTask = (task) => {
    // setTasks([...tasks, { id: nextId++, text: task, done: false }]);  // without reducer
    dispatch({ type: "added", id: Date.now(), text: task }); // using reducer
  };
  const handleUpdateTask = (task) => {
    // const newTasks = tasks.map((t) => (t.id == task.id ? task : t));
    // setTasks(newTasks);
    dispatch({ type: "changed", task: task });
  };

  const handleDeleteTask = (taskId) => {
    // setTasks(tasks.filter((t) => t.id == taskId));
    dispatch({ type: "deleted", id: taskId });
  };

  function reducerFunction(tasks, action) {
    switch (action.type) {
      case "added": {
        const newTask = { id: action.id, text: action.text, done: false };
        const updatedTasks = [...tasks, newTask];
        return updatedTasks;
      }
      case "changed": {
        const updatedTasks = tasks.map((t) =>
          t.id == action.task.id ? action.task : t
        );
        return updatedTasks;
      }
      case "deleted": {
        const updatedTasks = tasks.filter((t) => t.id !== taskId);
        return updatedTasks;
      }
      default:
        throw Error("Unknown action: " + action.type);
    }
  }
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskAppReducer;

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

// diff b/w useState & useReducer

// use reduer uses dispatch method to dispatch action objects. & use state uses setter fn to set state.
// use state only takes one arg of initial state but use reducer takes reducerfn as well as initialState.

//  we have encountered with words like action & reducer fn . what exactly are these things?

// action object=> It is a plain js object having type & data inside it.
// reducer fn => It is pure js fn without any side effects having two params first is state & second is
// action object.


