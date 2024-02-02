import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function Task(props){
    return(
        <li>
            <p className='ptask'>{props.task}</p>
            <div className='btnsdiv'>
            <button className='close-element' onClick={()=>props.edit(props.id)}>
                <AiFillEdit size={25} style={{ color: 'black' }}/>
            </button>
            <button className="close-element" onClick={()=>props.fct(props.id)}>
                <MdDelete size={25} style={{color:'#970C10'}}/>
            </button>
            </div>
        </li>            
    );
}