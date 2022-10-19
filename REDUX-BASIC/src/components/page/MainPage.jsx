import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const depts = useSelector((store) => store.depts);
  return (
    <>
      <div className="sub_container">
        <h2>컨텐츠 영역</h2>
        <hr />
        {depts &&
          depts.map((dept, i) => (
            <h3 key={i}>
              {" "}
              {dept.DEPTNO}, {dept.DNAME}, {dept.LOC}
            </h3>
          ))}
      </div>
    </>
  );
};

export default MainPage;
