import React, { useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import HackerHeader from "../page/HackerHeader";
import HackerFooter from "../page/HackerFooter";
import { Button, Form, Modal, Table } from "react-bootstrap";
import NoticeRow from "./NoticeRow";
import "./notice.css";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FS_APIKEY,
  authDomain: process.env.REACT_APP_FS_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FS_PROJECTID,
  storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
  databaseURL: process.env.REACT_APP_FS_DATABASEURL,
  messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FS_APPID,
  measurementId: process.env.REACT_APP_FS_MEASUREMENTID,
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase();

const NoticeList = (props) => {
  const [notice, setNotice] = useState({
    n_no: 0,
    n_title: "",
    n_writer: "",
    n_content: "",
    n_date: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notices, setNotices] = useState({
    1: { n_no: 1, n_title: "제목1", n_writer: "관리자", n_date: "2022-10-20" },
    2: { n_no: 2, n_title: "제목2", n_writer: "관리자", n_date: "2022-10-21" },
    3: { n_no: 3, n_title: "제목3", n_writer: "관리자", n_date: "2022-10-22" },
  });
  const searchNotice = () => {};
  const noticeInsert = (e) => {
    // submit 사용시 페이지 새로고침 처리 방어 코드
    e.preventDefault(); // 이벤트 버블링 방어코드
    console.log(notice);
    set(ref(database, "notice/" + notice.n_no), notice);
    handleClose();
  };
  const handleChangeForm = (e) => {
    if (e.currentTarget == null) return;
    console.log("폼 내용 변경 발생 name : " + e.target.name);
    console.log("폼 내용 변경 발생 value : " + e.target.value);
    setNotice({
      ...notice, // 처음에 초기화된 정보에 얕은 복사 처리
      n_date: Date.now(),
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <HackerHeader />
      <div className="container">
        {/* 헤더 영역 */}
        <div className="page-header">
          <h2>
            공지사항&nbsp;
            <i className="fa-solid fa-angles-right"></i>&nbsp;
            <small>글목록</small>
          </h2>
          <hr />
        </div>
        {/* 검색기 추가 영역 */}
        <div className="row">
          <div className="col-3" style={{ width: "13%" }}>
            <select id="gubun" className="form-select" aria-label="분류선택">
              <option defaultValue>분류선택</option>
              <option value="n_title">제목</option>
              <option value="n_writer">작성자</option>
              <option value="n_content">내용</option>
            </select>
          </div>
          <div className="col-6" style={{ width: "20%" }}>
            <input
              id="keyword"
              type="text"
              className="form-control"
              placeholder="검색어를 입력하세요"
            />
          </div>
          <div className="col-3">
            <Button id="btn_search" variant="dark" onClick={searchNotice}>
              검색
            </Button>
          </div>
        </div>
        {/* 검색기 추가 끝 */}
        <div className="notice-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {notices &&
                Object.keys(notices).map((key) => (
                  <NoticeRow key={key} notice={notices[key]} />
                ))}
            </tbody>
          </Table>
        </div>
        <hr />
        <div className="noticelist-footer">
          <Button variant="warning">전체조회</Button>&nbsp;
          <Button variant="success" onClick={handleShow}>
            공지 등록
          </Button>
        </div>
      </div>
      {/* ========[[[부서 등록 모달 시작]]]======= */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>공지 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="f_notice" method="get">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>글 제목</Form.Label>
              <Form.Control
                type="text"
                name="n_title"
                placeholder="Enter 글 제목"
                onChange={handleChangeForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicWriter">
              <Form.Label>작성자</Form.Label>
              <Form.Control
                type="text"
                name="n_writer"
                placeholder="Enter 작성자"
                onChange={handleChangeForm}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="n_content"
                onChange={handleChangeForm}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={noticeInsert}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ========[[[부서 등록 모달 시작]]]======= */}
      <HackerFooter />
    </>
  );
};

export default NoticeList;
