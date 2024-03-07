import {useForm} from 'react-hook-form';

const errorStyle = {
  fontSize: '12px',
  color:'red',
  fontWeight: 'bold'
};

function App(){

  const {register, handleSubmit, watch, formState:{errors}} = useForm({
    mode: 'onSubmit', //어느시점에 검증할거냐
    reValidateMode: 'onChnage',
    criteriaMode: 'firstError',
    defaultValues: {
      name: '',
      email: '',
      cellphone: '010',
    }
  });

  const onSubmit = data =>{
    console.log('서버에 전송...', data);
  }


  return (
    <>
      <h1>회원 가입</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='name'>이름</label>
        <input 
          id="name"
          {...register('name', {
            required: '이름을 입력하세요',
            minLength: {
              value: 2,
              message: '2글자 이상 입력하세요.'
            }
          })}
        />
        <br />
        <div style={errorStyle}>{errors.name?.message}</div>



        <label htmlFor='email'>이메일</label>
        <input 
          id="email"
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: '이메일 양식에 맞지 않습니다'
            }
          })}
        />
        <br />
        <div style={errorStyle}>{errors.email?.message}</div>



        <label htmlFor='cellphone'>전화번호</label>
        <input 
          id="cellphone"
          {...register('cellphone', {
            required: '전화번호를 입력하세요',
            pattern: {
              value: /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/,
              message: '전화번호 형식에 맞지 않습니다.'
            }
          })}
        />
        <br />
        <div style={errorStyle}>{errors.cellphone?.message}</div>



        <button type="submit">가입</button>

        <p>
          이름: {watch('name')} {''}
          이메일: {watch('email')} {''}
          전화번호: {watch('cellphone')} {''}
        </p>

      </form>
    </>
  );
}

export default App;