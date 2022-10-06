import React from 'react';
import HackerHeader from './HackerHeader';
import HackerFooter from './HackerFooter';
import styled from 'styled-components';

const NewsLi = styled.li`
        list-style: none;
        margin: 24px;
        cursor: pointer;
`

const HackerNews = (props) => {
        const [newsList, setNewList] = React.useState([]);
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
        React.useEffect(()=>{
            fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
                .then(response => response.json())
                .then(result => { console.log(result); setNewList(result)})
                .catch(error => console.log('error', error));
        }, [])
    return (
        <>
        <HackerHeader />
            <div>
                {newsList.map((news =>
                    <NewsLi className="newsli" key={news.id}>
                        <div className="cardRow">
                            <div className="cardContent">
                                <div className="title">{news.title}</div>
                                <div className="count">{news.comments_count}</div>
                            </div>
                            <div className="etc">
                                <div>{news.user}</div>
                                <div>{news.points}</div>
                                <div>{news.time_ago}</div>
                            </div>
                        </div>
                    </NewsLi>
                    ))}
            </div>
        <HackerFooter />
        </>
    );
}

export default HackerNews;