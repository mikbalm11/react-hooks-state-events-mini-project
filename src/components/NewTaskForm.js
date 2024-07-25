import React, { useState } from "react";

function NewTaskForm({ categories , onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text:"", category:"Code"});

  const categoryOptions = categories.map((category) => {
    if(category !== "All") {
      return (
        <option key={category}>{category}</option>
      )
    }
  })

  function handleChangeText(event) {
    let value = event.target.value;
    //console.log(value)
    setNewTask({
      text: value,
      category: newTask.category
    });
  }

  function handleChangeCategory(event) {
    let value = event.target.value;
    //console.log(value)
    setNewTask({
      text: newTask.text,
      category: value
    });
  }

  function handleNewTask(event) {
    //console.log(newTask)
    event.preventDefault();
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleNewTask}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={newTask.text}
        onChange={handleChangeText}
        />
      </label>
      <label>
        Category
        <select 
        name="category" 
        option={newTask.category}
        onChange={handleChangeCategory}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
