import React, { FormEvent } from "react";
import { useRef } from "react";

type NewTodoProps = {
    onAddTodo : (a : string)=> void
}

const NewTodo : React.FC<NewTodoProps> = (props)=>{

    const textInputRef = useRef<HTMLInputElement>(null);

    function todoSubmitHandler(e : FormEvent){
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    }

    return(
        <> 
            <form onSubmit={todoSubmitHandler}>
                <div>
                    <label htmlFor="todo-text">Todo Text</label>
                    <input type="text" id="todo-text" ref={textInputRef}></input>
                </div>
                <button type="submit">ADD Todo</button>
            </form>
        </>
    )
};

export default NewTodo;