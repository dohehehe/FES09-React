function func(data1, data2){
	data1 += 10;
  data2[0] += 10;
  console.log(data1, data2[0]);
}

var d1 = 80;  // 기본형 데이터 타입: number, bollen => 값이 저장되어 있다
var d2 = [80];  // 참조형 데이터 타입: array(object) => 주소가 참조되어 있다

console.log(typeof d1, typeof d2);

console.log('===== 함수 호출 이전 =====');
console.log(d1, d2[0]); 

console.log('===== 함수 호출 =====');
func(d1, d2);

console.log('===== 함수 호출 이후 =====');
console.log(d1, d2[0]); // 80, 90
      // 참조형 데이터 타입은 주소를 복사하고
      // 기본형 데이터 타입은 값을 복사해서 주고