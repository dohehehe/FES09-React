import {produce} from 'immer';


/* Reducer를 만들 때 주의할 점 ------------------------- */
// 순수 함수
// state의 불변성


function TodoReducer(state, action){
  const targetIndex = state.findIndex(item => item._id === action.item._id);

  switch(action.type){
    case 'ADD':
      return produce(state, draft => {
        draft.push(action.item)
      });

    case 'TOGGLE':
      return produce(state,draft=>{
        draft[targetIndex].done = !draft[targetIndex].done;
      });

    case 'DELETE':
      return produce(state, draft => {
        draft.splice(targetIndex, 1);
      });
  }


}


export default TodoReducer;