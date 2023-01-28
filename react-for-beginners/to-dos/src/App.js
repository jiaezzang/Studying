import {useState} from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ==""){
      return;
    }
    setToDo("")
    setToDos(currentArray => [toDo, ...currentArray])
  };
  
  return (
  <div>
    <h1>My To Do List ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={toDo}
        type="text" 
        placeholder="오늘 해야 할 일은..." 
      />
      <button>입력</button>
    </form>
    <hr />
    {toDos.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </div>)
 }

export default App;
