import React from 'react';

const NewsCard = ({ item, index }) => {

    const date = item.publishedAt;
    const formatDate = date.replace("T", "")
    const formatTime = formatDate.replace("Z", "")

    return (
        <div key={index} className='card'>
            <div className="card-content">
                <img src={item.urlToImage} className='card-img' alt="not found" />
                <div className="card-txt">
                    <a target='_blank' href={item.url} className='news-link'>
                        {
                            item.title
                        }
                    </a>
                    <p className="news-content">
                        {
                            item.description
                        }
                    </p>
                    <span className="date">
                        Published At : {formatTime}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;
