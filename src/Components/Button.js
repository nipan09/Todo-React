import React,{useState} from 'react'
import { TodoItem } from './TodoItem';
import icon from '../pics/icon.jpg';

export const Button = () =>{
    const [click, setClick] = useState(false);
    const onClick = () => setClick(true);

    return(
        <>
        <TodoItem />
        {!click? 
        <button size="lg" onClick={onClick}><img src={icon} alt="add item" width="30" /> </button>
        :
        <TodoItem />
        }
        </>
    )
}