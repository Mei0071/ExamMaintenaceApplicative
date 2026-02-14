import {useState} from "react";

interface TodoElement{
    id: string;
    text: string;
    finished:boolean;
}

const TodoList=()=>{
    const[todo, setTodo]=useState<(TodoElement[])>([]);
    const [newTodo, setNewTodo]=useState('');

    const addElement=()=>{
        if(newTodo!==''){
            const newIdElement=crypto.randomUUID();
            const newTodoElement: TodoElement={
                id: newIdElement,
                text:newTodo,
                finished:false
            };
            setTodo([...todo, newTodoElement]);
            setNewTodo('');
        }
    };

    const finishedChange=(id:string)=>{
        const update=todo.map((todo)=>{
            if(todo.id===id){
                return {...todo, finished:!todo.finished};
            }
            return todo;
        });
        setTodo(update);
    };

    return (
        <div>
            <h1>Todo List</h1>

            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>

            <button onClick={addElement}>Ajouter une tâche</button>

            <ol>
                {todo.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.finished}
                            onChange={() => finishedChange(todo.id)}
                        />
                        <span style={{ textDecoration: todo.finished ? 'line-through' : 'none', 'color':'blue'}}>
                 {todo.text}
               </span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;