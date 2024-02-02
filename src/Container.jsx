import Task from './task.js';
import Addinput from './Addinput.js';
// import darkmode from './darkmode.js';
import React from 'react';
import APIbackimage from './APIbackimage.js';
import APIboxclor from './APIboxcolor.js';
import { FaImages } from "react-icons/fa";
import APIquote from './APIquote.js';
const Container=()=>{
    const [adding,setadding]=React.useState(false);
    const inputref=React.useRef(null);
    const [tasks,settasks]=React.useState(JSON.parse(localStorage.getItem("tasks"))||[{
      id:"",
      onetask:""
    }]);
    const [input,setinput]=React.useState("");
   
    const [savedid,setSavedid]=React.useState(null)
    React.useEffect(()=>{
       localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
    React.useEffect(()=>{
      // darkmode(inputref.current);
      APIquote();
      APIbackimage()
   },[])
    function btnclick(){
      settasks(prevtasks=>{
        console.log("id dans add :" + savedid)
        const maxId = tasks.reduce((max, task) => {
            return Math.max(max, task.id);
          }, 0);
        const newId = savedid ? savedid : maxId+1;
        setSavedid(null)
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
    function edittask(id){
        setSavedid(id);
        console.log("id dans edit :" + savedid)
        const tasktochange=tasks.filter(task=>task.id===id)
        const a=tasktochange.onetask
        setinput(tasktochange[0].onetask)
        removetask(id)
        setadding(true)
    }
    function Addclicked(){
      setadding(true);
    }
    const afficher=tasks.map(element=> element.onetask.length>0 && <Task task={element.onetask} key={element.id} id={element.id} fct={removetask} edit={edittask}/>)
    console.log(tasks)

    return(
        <div className="firstdiv">
            <div className="theme-container" onClick={APIbackimage}>
              <FaImages size={30}/>
            </div>
            <div className='quotediv'>
              <h4>Quote of the day</h4>
              <p id='quote'></p>
            </div>
            <div className="title_icon">
                <h3>To-Do List</h3>
            </div>
            {adding===false ? 
            <button className='adding_btn' onClick={Addclicked}>Click To Add A New Task</button> 
            : <Addinput input={input} setinput={setinput} settasks={settasks} btncliked={btnclick} reference={inputref}/>
            }
          <ul>
            {afficher}
          </ul>
      </div>
    );
}

export default Container;