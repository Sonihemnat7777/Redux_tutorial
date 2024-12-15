
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector ((state) => state.counter.value);
  const dispatch= useDispatch();
  function handleIncrementClick() 
  {
    dispatch(increment());
    

  }
  
  function handleDecrementClick()
  {
    dispatch(decrement());
  }
  function handleresetClick()
  {
    dispatch(reset());
  }


  return (
    <div>
      <button onClick={handleIncrementClick}> + </button>
      <p> Count : {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <button onClick={handleresetClick}>Reset</button>
    </div>
  )
}

export default App
