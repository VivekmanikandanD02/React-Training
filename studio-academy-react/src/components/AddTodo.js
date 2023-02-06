import { useState } from "react";

const AddTodo = (props)=> {
    const {addTodo} = props;
    const [todoText, setTodoText] = useState("");

    const handleChange = (event) => {
        console.log({v: event.target.value});
        setTodoText(event.target.value);
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todoText);
    }  
    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>To Do</label>
            <input type="text" value={todoText} onChange={handleChange}></input>
            <button type="submit">Add Todo</button>
        </form>
        </>
    );
   
}
export default AddTodo;