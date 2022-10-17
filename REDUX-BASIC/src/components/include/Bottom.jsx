import React from "react";

const Bottom = ({ increase, decrease }) => {
  return (
    <div className="sub_container">
      <h3>바닥글 섹션</h3>
      <button onClick={increase}>증가</button>
      &nbsp;&nbsp;
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default Bottom;
