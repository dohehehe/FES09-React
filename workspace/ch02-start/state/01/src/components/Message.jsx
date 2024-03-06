import {useState} from 'react';

function Message(){
  // TODO 1. 메세지를 저장할 상태 생성
  //      2. 입력 횟수를 저장할 상태 생성

  const [msg, setMsg] = useState('공백');
  const [count, setCount] = useState(0);

  const handleChange = e => {
    const inputMsg = e.target.value;

    //      3. 입력받은 메세지로 상태 수정
    //      4. 증가시킨 입력 횟수로 상태 수정
    setMsg(inputMsg);
    setCount(count+1);
  };

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <br />
      <span>입력 메세지: {msg} </span>
      <br />
      <span>입력 횟수: {count} </span>
    </div>
  );

}

export default Message;