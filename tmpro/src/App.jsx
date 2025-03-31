import Header from "./components/Header";
import Task from "./components/TaskList"
import Button from "./components/Button"
import React from "react"
import Modal from "./Modal";

export default function App(){
  const [task, setTask] = React.useState("Add some task please!") 
  const [modal, setModal] = React.useState(false)

  function addTask(){
    
  }
  function changeModal(){
    setModal(prevModal => !prevModal)
  }
  function deleteTask(){
    console.log("bye")
  }
  return(
    <>
      <Header />
      <Task val = {task}/>
      <Button name="Add Task" func={changeModal}/>
      <Button name="Delete Task" func={deleteTask}/>
      {modal && < Modal add={addTask}
      change ={changeModal}/>}
    </>
  );
}