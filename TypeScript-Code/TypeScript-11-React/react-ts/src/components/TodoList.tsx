import React from "react";

interface TodoListProps{
    items : {id : string, text : string}[];
}

const TodoList : React.FC<TodoListProps> = (props)=>{


    return(
        <>
            <ul>
                {props.items.map((ele, idx, arr)=>{
                    return  <li key={ele.id}>{ele.text}</li>
                })}
            </ul>
        </>
    )
}

export default TodoList