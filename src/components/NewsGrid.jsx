import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { links } from './data/Data';
import NewsCard from './NewsCard';

export default function NewsGrid() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [catergory, setCategory] = useState('general')
    const API_KEY = 'b738ed2669c54125aae96fba7c1107d5&pageSize=10'

    async function getNewsData() {
        const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${catergory}&apiKey=${API_KEY}`);
        setNewsData(resp.data.articles);
        setLoading(false);
    }

    useEffect(() => {
        getNewsData();
        setLoading(true);
    }, [catergory]);

    return (
        <>
            <div className="catergory">
                <h1> See The Latest News <i className='bx bx-news'></i> </h1>
                <ul className="btn-list">
                    {
                        links.map((el, index) => {
                            return (
                                <li key={index}>
                                    <button onClick={() => setCategory(el.value)} > {el.name} </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="grid">
                {
                    loading ? <img src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" alt="" /> :
                        newsData.map((item, index) => {
                            return (
                                <div key={index} className="cards-area">
                                    <NewsCard item={item} />
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}
