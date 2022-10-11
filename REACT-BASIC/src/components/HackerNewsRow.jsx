import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewsLi = styled.li`
    list-style: none;
    margin: 24px;
    cursor: pointer;
`;
const CardRow = styled.div`
    background-color: aquamarine;
    border: 1px solid lightgray;
    border-radius: 6px;
    &:hover{  
    background-color : lightgray;
    }
`;

const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DivTitle = styled.div`
    font-size: 20px;
`;

const DivCount = styled.div`
    background-color: wheat;
    width: 35px;
    height: 25px;
    text-align: center;
    border-radius: 50%;
`
const DivEtc = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    padding-left: 10px;
`

const DivUTP = styled.div`
    margin-left: 5px;
`

const HackerNewsRow = (props) => {
    const { news, pictureUpload } = props;
    const [file, setFile] = useState({ fileName:null, fileURL:null })
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const imgChange = async (event) => {
    console.log("imgChange호출")
    console.log(event.target.files[0])
    const upload = await pictureUpload.upload(event.target.files[0])
    setFile({
        fileName: upload.public_id + "." + upload.format,
        fileURL: upload.url,
    })
    const uploadIMG = document.getElementById("img") //input의 이미지 객체 얻어오기
    const holder = document.getElementById("uploadImg") //이미지를 집어넣을 곳의 부모태그
    const file = uploadIMG.files[0]
    const reader = new FileReader()
    reader.onload = function (event) {
        const img = new Image()
        img.src = event.target.result
    if (img.width > 150) {
        //넣으려는 사진 크기에 맞춰 width값을 제한하면 된다.
        img.width = 150
    }
        holder.innerHTML = ""
        holder.appendChild(img)
    }
    reader.readAsDataURL(file)
    return false
    }
    return (
        <>
        {file.fileName+", "+file.fileURL}
        <NewsLi key={news.id}>
            <CardRow>
                <CardContent>
                    <DivTitle>
                        <Link to={"/newsreple/" + news.id} className="nav-link">
                            {news.title}
                        </Link>
                    </DivTitle>
                    <DivCount>{news.comments_count}</DivCount>
                </CardContent>
                <DivEtc>
                        <DivUTP>
                            <i className="fas fa-user mr-1"></i>{news.user}</DivUTP>
                    <DivUTP><i className="fas fa-heart mr-1"></i> {news.points}</DivUTP>
                    <DivUTP><i className="far fa-clock mr-1"></i> {news.time_ago}</DivUTP>
                </DivEtc>
            </CardRow>
                <Button variant="primary" onClick={handleShow}>
                모달
                </Button>
            </NewsLi>
    {/*=========================[[[[[사진 업로드 테스트 모달]]]]]=========================*/}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="f_img" method="get">
                <Form.Group className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    id="img"
                    name="img"
                    onChange={imgChange}
                />
                </Form.Group>
            <div id="uploadImg">
                    <img
                        className="thumbNail"
                        src="https://via.placeholder.com/150"
                        alt="미리보기"
                    />
            </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    {/*=========================[[[[[사진 업로드 테스트 모달]]]]]=========================*/}
        </>
    );
}

export default HackerNewsRow;