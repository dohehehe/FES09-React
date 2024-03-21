import Left3 from '@components/Left3';
import useCounterStore from '@zustand/counter.mjs';
import { useEffect } from 'react';

function Left2() {

  const {count} = useCounterStore();

  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });
  return (
    <div>
      <h1>Left2: {count} </h1>
      <Left3 />
    </div>
  );
}

export default Left2;