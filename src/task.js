import React from 'react';
import circulaire from './icons/circulaire.png';
import supprimer from './icons/supprimer.png';

export default function Task(props){
    
    return(
            <li>
                <p>{props.task}</p>
                <div className='btnsdiv'>
                <button className='close-element' onClick={()=>props.change(props.id)}><img src={circulaire}/></button>
                <button className="close-element" onClick={()=>props.fct(props.id)}><img src={supprimer}/></button>
                </div>
            </li>
            
    );
}