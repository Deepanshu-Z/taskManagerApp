import Header from "./components/Header";
import Task from "./components/TaskList";
import Button from "./components/Button";
import React from "react";
import Modal from "./Modal";

export default function App() {
  const [task, setTask] = React.useState([]); // ✅ Start with an empty array
  const [modal, setModal] = React.useState(false);

  function addTask(e) {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    const formData = new FormData(form);
    const taskData = {
      title: formData.get("title"),
      description: formData.get("description"),
      dueDate: formData.get("dueDate"),
      priority: formData.get("priority"),
      category: formData.get("category"),
      
    };

    setTask(prevTask => [...prevTask, taskData]); // ✅ Correctly add new task
    console.log(taskData);
    setModal(false); 
  }

  function changeModal() {
    setModal(prevModal => !prevModal);
  }

  function deleteTask() {
    console.log("bye");
  }

  const taskList = task.map((e, index) => <Task key={index} val={e} />); // ✅ Corrected task list

  return (
    <>
      <Header />
      {!modal && taskList}
      {!modal && <Button name="Add Task" func={changeModal} />}
      {!modal && <Button name="Delete Task" func={deleteTask} />}
      {modal && <Modal add={addTask} change={changeModal} />}
    </>
  );
}
