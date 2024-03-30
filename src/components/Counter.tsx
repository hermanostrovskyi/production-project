import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1)
  }

  const decrement = () => {
    setCount(count => count - 1)
  }


  return (
    <div>
      <p>{count}</p>
      <button className={classes.btn} onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
