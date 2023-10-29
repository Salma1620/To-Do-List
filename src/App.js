import './App.css';
import React from 'react';
import Task from './task.js';
import Addtask from './Addtask.js';
import darkmode from './darkmode.js';

function App() {
  const inputref=React.useRef(null);

  const [tasks,settasks]=React.useState(JSON.parse(localStorage.getItem("tasks"))||[{
    id:"",
    onetask:""
  }]);
  const [input,setinput]=React.useState("");

  React.useEffect(()=>{
     localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  React.useEffect(()=>{
    darkmode(inputref.current);
 },[])
  function btnclick(){
    settasks(prevtasks=>{
      const newId = prevtasks.length + 1;
      let newlist=[...prevtasks]
      if (input.length>0) newlist =[ { id: newId, onetask: input }, ...prevtasks];
      setinput("");
      return newlist;
    })    
    setadding(false);

  }

  function removetask(id){
    settasks(prevtasks=>{
        return prevtasks.filter(element => element.id !== id);
    })
}
  function changetask(id){
    const tasktochange=tasks.filter(task=>task.id===id)
    const a=tasktochange.onetask
    setinput(tasktochange[0].onetask)
    removetask(id)
  }
const [adding,setadding]=React.useState(false);
  function Addclicked(){
    setadding(true);
    console.log(adding)
  }
  const afficher=tasks.map(element=> element.onetask.length>0 && <Task task={element.onetask} key={element.id} id={element.id} fct={removetask} change={changetask}/>)
  console.log(tasks.length)

  return (
    <div className="firstdiv">

      <div className="theme-container shadow-light">
          <img id="theme-icon" src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg" alt="ERR" />
      </div>
      <div className="title_icon">
          <h3>To-Do List</h3>
      </div>
      {adding===false ? <button className='adding_btn' onClick={Addclicked}>Click To Add A New Task</button> 
      : <Addtask input={input} setinput={setinput} settasks={settasks} btncliked={btnclick} reference={inputref}/>
      }

      
        <ul>
          {afficher}
        </ul>
      

  </div>
  );
}

export default App;
