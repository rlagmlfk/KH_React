import React, { useEffect, useRef, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Form, InputGroup } from "react-bootstrap";
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

const TomatoTalk = (props) => {
  const formRef = useRef(); // html 노드 접근시 사용
  const msgRef = useRef();
  const userIdRef = useRef();
  // 사용자가 입력한 메시지 담기
  const [message, setMessage] = useState({
    m_no: 0,
    userId: "",
    msg: "",
    curtime: "",
  });
  useEffect(() => {
    console.log(database);
    const starCountRef = ref(database, "talk");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);
  const send = (e) => {
    if (e.key === "Enter") {
      // submit 속성 사용시 반드시 아래 코드 추가할 것 - 버블링 방지
      e.preventDefault();
      // 사용자가 입력해서 제출하고 나면 form 초기화
      formRef.current.reset();
      set(ref(database, "talk/" + message.m_no), message);
    }
  };
  const handleChangeForm = (e) => {
    if (e.currentTarget == null) return;
    console.log("폼 내용 변경 발생 name : " + e.target.name);
    console.log("폼 내용 변경 발생 value : " + e.target.value);
    setMessage({
      ...message,
      userId: "토마토",
      m_no: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>TomatoTalk 화면</h3>
      <hr />
      <Form ref={formRef}>
        <InputGroup className="mb-3">
          <input
            type="hidden"
            ref={userIdRef}
            name="userId"
            onChange={handleChangeForm}
          />
          <Form.Control
            ref={msgRef}
            name="msg"
            placeholder="여기에 말씀하세요"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onKeyDown={send}
            onChange={handleChangeForm}
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default TomatoTalk;
