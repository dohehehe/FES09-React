var score = [1,2,3,4,5,6,7,8,9,10];

var sum = 0;
// 배열 모든 요소의 합계



/* ----------------------------------- for ---------------------------------- */
for(let i=0; i<score.length; i++){
  sum += score[i];
}

console.log(sum);


/* --------------------------------- for of --------------------------------- */
var sum = 0;
for(const ele of score){
  sum += ele;
}

console.log(sum);



/* --------------------------------- forEach -------------------------------- */
var sum = 0;

score.forEach((item)=>{
  sum += item;
})

console.log(sum);



/* --------------------------------- reduce --------------------------------- */
var sum = 0;

score.reduce((sum, num)=>{
  console.log(sum,num);
  return sum  += num;
})

console.log(sum);