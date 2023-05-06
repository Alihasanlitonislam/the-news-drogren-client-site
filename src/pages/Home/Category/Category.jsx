import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import UseTitle from '../../../UseTitle/UseTitle';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    UseTitle('Home')
    return (
        <div>
            { id && <h2>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;