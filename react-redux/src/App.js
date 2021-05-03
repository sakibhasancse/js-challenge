
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'
function App() {
  const mystate = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Increment and Decrement</h1>
      <div className="quantity">
        <a className="quantity_minus" onClick={() => dispatch(decNumber())} title="Decrement"><span>-</span></a>
        <input type="text" name="quantity" className="quantity_input" value={mystate} />
        <a className="quantity_plus" onClick={() => dispatch(incNumber())} title="Increment"><span>+</span></a>
      </div>

    </div>
  );
}

export default App;
