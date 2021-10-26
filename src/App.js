import {useState} from 'react';
import Todo from './ToDo';
import TodoForm from './ToDoForm';

function App() {
  const [todos,setTodos]=useState([])

  //добавление задач
   const addTask=(userInput)=>{
    if(userInput){
      const newItem={
        id:Math.random().toString(36).substr(2,9),
        task:userInput,
        complete:false,

      }
      setTodos([...todos,newItem])
    }
   }
  //удаление задач
  const removeTask=(id)=>{
   setTodos([...todos.filter((todo)=>todo.id !=id)])
  }
  //переключение между состоянием готового не готового задачей
  const hendellToggle=(id)=>{
    setTodos([
      ...todos.map((todo)=>
        todo.id===id ? { ...todo,complete: !todo.complete}: {...todo}
      )
    ])
  }
  return(
    <div className="App">
    <header>
      <h1>Список задач {todos.length}</h1>
    </header>
    <TodoForm addTask={addTask}/>
   {todos.map((todo)=>{
     return(
       <Todo
       todo={todo}
       key={todo.id}
       toggleTask={hendellToggle}
       removeTask={removeTask}
       />
     )
   })}
    </div>
  )

}

export default App;
