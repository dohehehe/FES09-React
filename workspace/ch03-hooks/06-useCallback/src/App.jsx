import { useCallback, useState } from "react";
import Payment from "./Payment";
import Product from "./Product";

function App(){
  const price = 12000;
  const defaultShippingFees = 3000;
  const [quantity, setQuantity] = useState(1);
  const [shippingFees, setShippingFees] = useState(defaultShippingFees);

  // 수량이 변경될 때 배송비 다시 계산
  const handleChange = e => {
    const newQuantity = e.target.value;
    setShippingFees(defaultShippingFees * Math.ceil(newQuantity / 5));
    setQuantity(newQuantity);

    // 랜더링 전이기에 상태 변화가 일어나지 않은 값으로 계산됨 
    // setShippingFees(defaultShippingFees * Math.ceil(quantity / 5));
    // setQuantity(e.target.value);
  };



  // 이렇게 할 경우 반복적인 호출은 되지 않지만, 동시에 quantity와 shippingFees도 변하지 않기에
  // alert에서 변화된 값을 주지 못함
        // const handleClick = useCallback(() => {
        //   alert(`${price * quantity + shippingFees}원 결제 하시겠습니까?`);
        //   // 결제 로직...
        // },[]);

  // 이런 경우는 alert내의 변수 값이 바뀌지만
  // 매번 dependencies의 변경 때마다 재랜더링되기에 쓰는 이유가 없어짐
        // const handleClick = useCallback(() => {
        //   alert(`${price * quantity + shippingFees}원 결제 하시겠습니까?`);
        //   // 결제 로직...
        // },[quantity, shippingFees]);


  // 이런 경우에만 효과적
    const handleClick = useCallback(() => {
      alert(`결제 하시겠습니까?`);
    },[]);      



  return (
    <>
      <h1>useCallback - 함수를 memoization</h1>
      <Product price={ price } />

      <h2>수량 선택</h2>
      <div>
        가격: { price }원<br/>
        수량: <input type="number" min="1" value={ quantity } 
          onChange={ handleChange } /><br/>
        상품 가격: { price * quantity }<br/>
      </div>

      <Payment shippingFees={ shippingFees } handleClick={ handleClick }/>
    </>
  );
}

export default App;