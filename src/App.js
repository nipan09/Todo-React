import './App.css';
import {useState} from 'react'
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Todos} from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

function App() {
  const initialItems = []
  const [items, setItems] = useState(initialItems);
  const [sno, setSno] = useState(1);

  function onDelete(sno){
    const newItems = items.filter((item) => item.sno !== sno);
    setItems(newItems);
    setSno(sno-1)
  }

  function addTodo(title, desc){
      const newItem = {
        sno: sno,
        title: title,
        desc: desc
      }
      setItems([...items, newItem]);
      setSno(sno+1);
  }

  console.log(items)
  return (
    <>
    <Header title="ToDos-List"/ >
    <div className='row'>
    <AddTodo className="col-xs-6" addTodo={addTodo} />
    <Todos className="col-xs-6" todoItems={items} onDelete={onDelete} />
    </div>
    <Footer/>
    </>
  );
}

export default App;