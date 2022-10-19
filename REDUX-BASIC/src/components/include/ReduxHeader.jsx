import React from "react";
import { useDispatch, useSelector } from "react-redux";
// spread 연산자, 얕은 복사, 구조분해할당 - 기초
const ReduxHeader = () => {
  const dispatch = useDispatch();
  const number = useSelector((store) => store.number);
  const mem_name = useSelector((store) => store.mem_name);
  const empVO = useSelector((store) => store.empVO);
  // const { number, mem_name } = useSelector((store) => store.number);
  return (
    <div className="sub_container">
      <h2>헤더 섹션</h2>
      번호 : {number}
      &nbsp;&nbsp; 이름 : {mem_name}
      &nbsp;&nbsp; 사원정보 :
      {empVO && `사원번호:${empVO.empno}, 사원명:${empVO.ename}`}
    </div>
  );
};

export default ReduxHeader;
