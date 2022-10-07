import React from 'react';
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
    const {news} = props
    return (
        <>
        <NewsLi key={news.id}>
            <CardRow>
                <CardContent>
                    <DivTitle>{news.title}</DivTitle>
                    <DivCount>{news.comments_count}</DivCount>
                </CardContent>
                <DivEtc>
                    <DivUTP><i className="fas fa-user mr-1"></i> {news.user}</DivUTP>
                    <DivUTP><i className="fas fa-heart mr-1"></i> {news.points}</DivUTP>
                    <DivUTP><i className="far fa-clock mr-1"></i> {news.time_ago}</DivUTP>
                </DivEtc>
            </CardRow>
        </NewsLi>
        </>
    );
}

export default HackerNewsRow;