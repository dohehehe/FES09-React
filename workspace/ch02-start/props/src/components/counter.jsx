import {useState} from 'react';
import Button from './button';

function Counter({children=0}) {
  const [count, setCount] = useState(Number(children));

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(Number(children));
  };

  return(
    <div id="counter">
      <Button type="button" color="red" onClick={ handleDown }>-</Button>
      <Button type="button" color="gray" onClick={ () => handleReset() }>{children}</Button>
      <Button type="button" color="blue" onClick={ handleUp }>+</Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;