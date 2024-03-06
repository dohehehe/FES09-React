import { useState } from 'react';

function Counter(){

  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={ () => {
        setNumber(number+3);
        setTimeout(()=>{
          alert(number);
        },3000);
      }}>+3</button>
    </>
  )
}

export default Counter;
