import { useEffect, useState } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';

function App() {
  const [count, setCount] = useState(10);



  const countUp = function(step){
    setCount(count + step);
  };

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <div id="container">
      <h1>Context API - with props</h1>
      <div id="grid">
        <Left1 count={count}/>
        <Right1 countUp={countUp}/>
      </div>
    </div>
  );
}

export default App;