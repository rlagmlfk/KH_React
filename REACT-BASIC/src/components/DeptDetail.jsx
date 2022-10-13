import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { jsonDeptList } from "./service/dbLogic";

const DeptDetail = (props) => {
  // DeptRow에서 쿼리스트링으로 넘어온 부서번호 담기
  const { deptno } = useParams();
  const [deptVO, setDeptVO] = useState({
    DEPTNO: 0,
    DNAME: "",
    LOC: "",
    FILENAME: "",
    FILEURL: "",
  });
  // useState에서 원시형으로 호출
  // const [isOK, setIsOk] = useState(false);
  // 위에서 파라미터로 받은 부서번호로 조건 검색 처리한 후 담을 변수 선언
  // useState에서 함수형으로 호출(JavaScript에서는 객체 취급 - 주소번지가 계속 바뀜 - 초기화)
  // 함수형의 첫번째 파라미터가 함수이다?
  // 렌더링 될 때마다 함수 초기화를 생략하고 싶다. useCallback()
  // 한 번 초기화되면 리액트 내에서만 유지되고 싶다. useMemo()
  useEffect(() => {
    const asyncDB = async () => {
      const res = await jsonDeptList({ deptno: deptno });
      // console.log(res); // fetch함수와 차이점 발견 - JSON.stringify, JSON.parse를 사용하지 않아도 바로 json받아냄
      // console.log(res.data);
      // console.log(res.data[0].LOC);
      // console.log(res.data[0].DNAME);
      // console.log(res.data[0].FILEURL);
      setDeptVO(res.data[0]);
    };
    asyncDB();
  }, [deptno]); // 의존배열이 있고 없고는 useState의 순서에 영향X
  const deptDelete = () => {};
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h2>
            부서관리&nbsp;
            <i className="fa-solid fa-angles-right"></i>&nbsp;
            <small>부서상세보기</small>
          </h2>
          <hr />
        </div>
        <Card style={{ width: "58rem" }}>
          <Card.Body>
            <div className="dept-detail">
              <Card.Img
                variant="top"
                style={{ width: "250px" }}
                src={`${deptVO.FILEURL}`}
              />
              <div className="dept-header">
                <Card.Title>{deptVO.DNAME}</Card.Title>
                <Card.Text>{deptVO.LOC}</Card.Text>
                <Card.Text>{deptVO.FILENAME}</Card.Text>
              </div>
            </div>
          </Card.Body>
          <div>
            <Button variant="outline-danger" onClick={deptDelete}>
              삭제
            </Button>
            &nbsp;
            <Button variant="outline-dark">
              <Link to="/dept" className="nav-link">
                부서목록
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DeptDetail;
