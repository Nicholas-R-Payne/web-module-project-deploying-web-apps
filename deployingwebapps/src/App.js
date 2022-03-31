import './App.css';
import React, { useState } from 'react';

function App() {
    /* STEP 1 */
    const [count, setCount] = useState(0);

    const increment = () => {
      /* STEP 4 */
      setCount(count + 1);
    };
    const decrement = () => {
      /* STEP 5 */
      setCount(count - 1);
    };
    const reset = () => {
      /* STEP 6 */
      setCount(0);
    };
  
    const style = {
      fontSize: '1.5em',
      marginBottom: '0.3em',
      color: count % 2 === 0 ? 'royalblue' : 'crimson' /* STEP 2 */
    };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count % 2 === 0 ? 'even' : 'odd'} {/* STEP 3 */}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
