const TodoList = (props)=> {
    const {todoList} = props;
 /* Todo list */
 return (
    <>
     <ul>
        {todoList && todoList.map((item,index)=><li key={index}>{item.text}</li>)}
    </ul>
    </>
 )

}
export default TodoList;