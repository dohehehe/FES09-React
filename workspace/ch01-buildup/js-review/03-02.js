var item = { no: 1, todo: '두부', done: true };


/*  객체 복사하기 / true -------------------------------- */

var newItem = item;
console.log(item, newItem);
console.log(item === newItem); // true



newItem.done = false; 
  // newItem과 item 모두 false가 됨
  // 주소를 복사해주기 때문에. 참조형 데이터타입
console.log(item, newItem);
console.log(item === newItem); // true


// assign(target, source): target 객체에 source 객체의 속성을 추가함
var newItem = Object.assign(item, {delete: true}); // 원본 객체에 추가한다, 복제의 목적 x
console.log(item, newItem);
console.log(item === newItem); // true 





/*  새로운 객체로 만들기 / false ------------------------------ */


var newItem = {no:item.no, todo:item.todo, done:item.done};

console.log(item, newItem);
console.log(item === newItem); // false => 값이 아니라 동일한 주소인지만 확인



var newItem = {...item, done:true, delete:true}; // 새로운 객체를 만듦
// newItem.delete = ture;
console.log(item, newItem);
console.log(item === newItem); // false