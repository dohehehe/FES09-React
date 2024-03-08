import { useState } from 'react';


function App(){
  const [message, setMessage] = useState('');


  const handleChange = (e) => {
    setMessage(e.target.value);
    
  }


  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <span>입력 메시지:{message} </span>
    </div>
  );
}

export default App;