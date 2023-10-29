import React from 'react';
export default function Task(props){
    
    return(
            <li>
                <p>{props.task}</p>
                <div>
                <button className="close-element" onClick={()=>props.fct(props.id)}>X</button>
                <button className='close-element' onClick={()=>props.change(props.id)}>change</button>
                </div>
            </li>
            
    );
}