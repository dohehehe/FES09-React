var itemList = [
  { no: 1, todo: '두부', done: false},
  { no: 2, todo: '계란', done: false},
  { no: 3, todo: '라면', done: false},
];

var newItemList = itemList;

newItemList[1].done = true;

console.log(itemList, newItemList);          // done이 모두 true 로 변경됨
console.log(itemList === newItemList);       // true
console.log(itemList[1] === newItemList[1]); // true



/* 얕은 복사 --------------------------------- */

var newItemList = [...itemList]; // 얕은 복사

newItemList[1].done = false;

console.log(itemList, newItemList);          // done이 모두 false로 변경됨
console.log(itemList === newItemList);       // false
console.log(itemList[1] === newItemList[1]); // true



/* 깊은 복사 --------------------------------- */

newItemList[1] = {...itemList[1]}

newItemList[1].done = true;

console.log(itemList, newItemList);          // newItemList[1]만 ture가 됨
console.log(itemList === newItemList);       // false
console.log(itemList[1] === newItemList[1]); // false
