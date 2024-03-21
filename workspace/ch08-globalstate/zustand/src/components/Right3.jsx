import useCounterStore from '@zustand/counter.mjs';
import { useEffect } from 'react';

function Right3() {

  // const {count, countUp, countDown} = useCounterStore();
  const countUp = useCounterStore((state)=> state.countUp);
  const countDown = useCounterStore((state)=> state.countDown);

  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  return (
    <div>
      <h1>Right3</h1>
      <button onClick={ () => countUp(1) }>+</button>
      <button onClick={ () => countDown(1) }>-</button>
    </div>
  );
}

export default Right3;