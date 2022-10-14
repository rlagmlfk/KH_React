import styled from "styled-components";

export const VRLI = styled.li`
  width: 100%
  padding: 0.2;
  list-style:none;
`;

export const VRIMG = styled.img`
  width: 100%
  height: 80%;
  border-radius: 10px 10px;
`;

export const VRVIDEODIV = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px 0px;
  align-items: center;
  border: 2px solid #fd1c03;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f3e8ea;
  }
`;

export const VITITLE = styled.div`
  margin: 10px 10px;
  font-size: 1.5rem;
  font-family: 나눔스퀘어 네오;
`;

export const YOULI = styled.div`
  width: 30%;
  display: inline-block;
  float: right;
  overflow: hidden;
`;
