import './App.css';
import React from 'react';
import Task from './task.js';
import darkmode from './darkmone.js';
function App() {

  const [tasks,settasks]=React.useState(JSON.parse(localStorage.getItem("tasks"))||[{
    id:"",
    onetask:""
  }]);
  const [input,setinput]=React.useState("");

  React.useEffect(()=>{
     localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  function btnclick(){
    settasks(prevtasks=>{
      const newId = prevtasks.length + 1;
      let newlist=[...prevtasks]
      if (input.length>0) newlist =[ { id: newId, onetask: input }, ...prevtasks];
      setinput("");
      return newlist;
    })    
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

  const afficher=tasks.map(element=> element.onetask.length>0 && <Task task={element.onetask} key={element.id} id={element.id} fct={removetask} change={changetask}/>)
  console.log(tasks.length)

  return (
    <div className="firstdiv">

      <div className="theme-container shadow-dark">
          <img id="theme-icon" src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg" alt="ERR" />
      </div>
      <div className="title_icon">
          <h3>To-Do List</h3>
      </div>
      <div className="search_bar">
              <input className="input" type="text" name="input" placeholder="Add your task"
                      onChange={(e)=> setinput (e.target.value)} value={input}/>
              <button className="search_btn" onClick={btnclick} >Add</button>
      </div>
        <ul>
          {afficher}
        </ul>
      

  </div>
  );
}

export default App;
