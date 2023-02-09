//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [count,setCount] = useState(0);
  useEffect(()=> {
    document.title = `Click x ${count}`;
  })
  return (
    <>
    <p>You have clicket {count} times</p>
    <button onClick={()=>
    {setCount(count+1);}}>Click</button>
    </>
    
    
  );
}

export default App;
