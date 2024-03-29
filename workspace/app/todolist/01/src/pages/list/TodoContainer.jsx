import { useState } from "react";
import Todo from "./Todo";
import {produce} from 'immer';




function TodoContainer(){
  // 샘플 목록
  const [itemList, setItemList] = useState([
    { _id: 1, title: '두부', done: true} ,
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ]);




  function addItem(item){
    // 데이터 갱신(상태 변경)
    const newItemList = [...itemList, item];
    setItemList(newItemList);

    console.log(itemList, newItemList);
  }



  function toggleDone(_id){

    // 데이터 갱신(상태 변경)
    /*  * 불변성 x -------------------------------- */
      // item.done의 경우 내부 객체라 얕은 복사로 인해 참조가 그대로 유지
      // const item = itemList.find(item => item._id === _id);
      // item.done = !item.done;
      // const newItemList = [...itemList];


    /*  * 불변성 --------------------------------- */
    // const newItemList = itemList.map(item=>{
    //   if(item._id === _id){
    //     return {...item, done:!item.done}
    //   } else{
    //     return item;
    //   }
    // });


    /*  * immer -------------------------------- */
    const newItemList = produce(itemList, draft => {
      const item = draft.find(item => item._id === _id);
      item.done = !item.done;
    })

    setItemList(newItemList);

    console.log(itemList, newItemList);
  }




  function deleteItem(_id){
    // 상태 변경
    const newItemList = itemList.filter(item => item._id !== _id);
    setItemList(newItemList);
  }





  return (
      <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={deleteItem} /> 
  );
}



export default TodoContainer;