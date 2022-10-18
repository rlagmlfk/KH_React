import React, { useEffect, useRef, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Button, Form, InputGroup } from "react-bootstrap";
import { MesssageLi } from "../style/TalkStyle";
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
  // 클라우드 리얼데이터베이스 서버 정보 동기화 처리
  // 메시지 전송시 객체로 넘겼으므로 초기화도 []가 아니라 {}로 해야함 - 주의
  const [messages, setMessages] = useState({});
  // 사용자가 입력한 메시지 담기
  const [message, setMessage] = useState({
    m_no: 0,
    userId: "",
    msg: "",
    curtime: "",
  });
  const setClock = () => {
    const dateInfo = new Date();
    const hour = modifyNumber(dateInfo.getHours());
    const min = modifyNumber(dateInfo.getMinutes());
    const sec = modifyNumber(dateInfo.getSeconds());
    const curtime = hour + ":" + min + ":" + sec;
    return curtime;
  };
  const modifyNumber = (time) => {
    if (parseInt(time) < 10) return "0" + time;
    else return time;
  };
  useEffect(() => {
    console.log(database);
    setMessage({ ...message, curtime: setClock() });
    const starCountRef = ref(database, "talk");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //console.log(data);
      setMessages(data);
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
  const handleSend = (e) => {
    e.preventDefault();
    formRef.current.reset();
    set(ref(database, "talk/" + message.m_no), message);
  };
  const handleChangeForm = (e) => {
    if (e.currentTarget == null) return;
    // console.log("폼 내용 변경 발생 name : " + e.target.name);
    // console.log("폼 내용 변경 발생 value : " + e.target.value);
    setMessage({
      ...message,
      userId: "토마토",
      m_no: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>
          TomatoTalk <small>토마토님 예약상담</small>
        </h2>
        <hr />
      </div>
      <div>
        <ul>
          {messages &&
            Object.keys(messages).map((key) => (
              <MesssageLi key={key}>
                <Button className="btn btn-dark">{messages[key].msg}</Button>
                &nbsp;({messages[key].curtime})
              </MesssageLi>
            ))}
        </ul>
      </div>
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
          <Button variant="warning" onClick={handleSend}>
            보내기
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default TomatoTalk;
