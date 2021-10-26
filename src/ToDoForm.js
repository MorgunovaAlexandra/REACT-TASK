import {useState } from 'react'
function TodoForm({addTask}){
const[userInput,setUserInput]=useState('')
 
const  hendellSubmit=(e)=>{
  e.preventDefault()
  addTask(userInput)
  setUserInput('')
}

 const hendellChange=(e)=>{
 setUserInput(e.currentTarget.value)

}
const hendellKeyPress=(e)=>{
if(e.key==="Enter"){
  hendellSubmit(e)
}
}
return (
    <form onSubmit={hendellSubmit}>
      <input
      value={userInput}
      type="text"
      onChange={hendellChange}
      onKeyDown={hendellKeyPress}
      placeholder="введите значение"
      />
      <button>Сохранить</button>
     
    </form>
)
}
export default TodoForm;