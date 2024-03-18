import { Link, useParams } from 'react-router-dom';
import useAxios from '@hooks/useAxios';

function TodoDetail () {
  const params = useParams();

  const {isLoading, data, error} = useAxios({
    url: `/todolist/${params._id}`,
  });
  
  const item = data?.item;
  // const itemDetail = data?.items.find(item => item._id === Number(params._id));

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      <div className="todo">

      {error && <div style={{color:'red', position:'absolute', backgroundColor:'white', width:'100%', height:'100%',}}>{error.message}</div>}
      
      {isLoading && 
        <div style={{color:'skyblue', position:'absolute', backgroundColor:'white', width:'100%', height:'100%',}}>로딩 중입니다...</div>
      }

        <div>
          제목 : {item?.title}
        </div>
        <div>
          내용 : {item?.content}
        </div>
        <div>
          상태 :{item?.done ? '완료' : '미완료'}
        </div>
        <div>
          작성일 : {item?.createdAt}
        </div>
        <div>
          수정일 : {item?.updatedAt}
        </div>
        <Link to="edit">수정</Link>
        <Link to="/list">목록</Link>
      </div>
    </div>
  );

}

export default TodoDetail;