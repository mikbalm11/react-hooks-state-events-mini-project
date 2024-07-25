import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleNewTaskAdd(task) {
    //console.log(task)
    const taskTexts = tasks.map(task => task.text.toLowerCase())
    //console.log(taskTexts);
    if (!taskTexts.includes(task.text.toLowerCase())) {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
    } else {
      console.log("task already exists")
    }
  }

  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  }

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTaskAdd}/>
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
