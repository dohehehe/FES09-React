import { useState } from 'react';


function App(){
    // * 반복적인 동일 형태의 함수 선언 지양
    //   - name, email, cellphone을 user 객체로 묶기
    //   - handleChange 로 함수 통합

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [cellphone, setCellphone] = useState('');

  // const handleNameChange = e => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = e => {
  //   setEmail(e.target.value);
  // };

  // const handleCellphoneChange = e => {
  //   setCellphone(e.target.value);
  // };

    // const handleNameChange = e=> {
  //   const newUser = {
  //     ...user, 
  //     name: e.target.value
  //   }
  //   setUser(newUser);
  // }

  // const handleEmailChange = e=> {
  //   const newUser = {
  //     ...user, 
  //     email: e.target.value
  //   }
  //   setUser(newUser);
  // }

  // const handleCellphoneChange = e=> {
  //   const newUser = {
  //     ...user, 
  //     cellphone: e.target.value
  //   }
  //   setUser(newUser);
  // }


  const [user, setUser] = useState({
    name: '',
    email: '',
    cellphone: '010'
  });   // name, email, cellphone을 user 객체로 묶기


  const handleChange = e => {
    const newUser = {
      ...user,
      [e.target.name] : e.target.value
    }
    setUser(newUser);
  };    // handleChange 로 함수 통합


  const [errors, setErrors] = useState({

  })

  const onSubmit = (e)=>{
    e.preventDefault();

    let newErrors;
    
    // 필수 입력 체크
    if(user.name.trim()=== ''){
      newErrors = {
        name: {message:'이름을 입력하세요'}
      }
    } else if(user.name.trim().length < 2){
      newErrors = {
        name: {message: '이름을 2글자 이상 입력하세요'}
      }
    } else if(user.email.trim() === ''){
      newErrors = {
        email: {message: '이메일을 입력하세요'}
      };
    } else if(user.cellphone.trim() === '010' + ''){
      newErrors = {
        cellphone : {message: '휴대폰 번호를 입력하세요'}
      };
    }

    
    if(newErrors){
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('서버에 전송...',user);
    }
  }


  return (
    <>
      <h1>회원 가입</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor='name'>이름</label>
        <input 
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <br />
        <div>{errors.name?.message}</div>

        <label htmlFor='email'>이메일</label>
        <input 
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <div>{errors.email?.message}</div>

        <label htmlFor='cellphone'>전화번호</label>
        <input 
          id="cellphone"
          name="cellphone"
          value={user.cellphone}
          onChange={handleChange}
        />
        <br />
        <div>{errors.cellphone?.message}</div>

        <button type="submit">가입</button>

      </form>
    </>
  );
}

export default App;