import {ReactCsspin} from 'react-csspin';
import 'react-csspin/dist/style.css'

import useFetch from './hooks/useAxios';

function App() {

  const {data, error, isLoading} = useFetch({
    url: '/todolist?delay=2000'
  });

  return (
    <>
      <h1>Custom Hook - fetch API 사용</h1>
      <h2>할일 목록</h2>
      {error && 
        <p style={{color:'red'}}>{error.message}</p>
      }

      {isLoading && 
        <ReactCsspin color='black' />
      }

      { data && (
        <ul>
          {data?.items?.map(item=><li key={item._id}>{item.title}</li>)}
        </ul>
      )}
    </>
  )
}

export default App;
