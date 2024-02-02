import React from 'react';
export default function Addinput(props){
    return(
        <div className="search_bar">
              <input 
                className="input" 
                type="text" 
                name="input" 
                placeholder="Add your task"
                onChange={(e)=> props.setinput(e.target.value)} 
                value={props.input}
                ref={props.reference}
                />
              <button className="search_btn" onClick={props.btncliked} >Add</button>
        </div>
    );
}