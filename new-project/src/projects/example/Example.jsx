
import React, {useReducer, useEffect} from "react";
import AddTask from "./AddTask";
import List from "./List";
import { taskReducer } from "../../reducers/taskReducer";


const Example = () => {
    const [tasks, dispatch] = useReducer(taskReducer,[], () => {
        const localData = localStorage.getItem("tasks");
        return localData ? JSON.parse(localData) : [];
    });

    const handleAddTask = (task) => {
      dispatch({ type: "added", id: Date.now(), text: task });                      
    };
    const handleUpdateTask = (task) => {
      dispatch({ type: "changed", task: task });
    };
  
    // const handleDeleteTask = (taskId) => {
    //   dispatch({ type: "deleted", id: taskId });
    // };
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className=" card rounded bg-pink col-10 m-auto bg-secondary ">

    <h1>Example of Todo List</h1>
    <AddTask onAddTask= {handleAddTask}/>
    <List tasks= {tasks} onChangeTask={handleUpdateTask} onDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default Example

