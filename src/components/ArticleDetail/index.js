import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";

const ArticleDetail = (props) => {
    const { articles } = props

    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) return <div>Article not found</div>;

    const getImage = () => {
        let imageURL = article?.media[0]?.["media-metadata"]?.filter((data) => data.format === "mediumThreeByTwo440")[0].url || article?.media[0]?.["media-metadata"]?.filter((data) => data.format === "Standard Thumbnail")[0].url
        return imageURL
    }
    return (
        <>
            <Header />
            <div className="articles-detail-container">
                <div className="back-action"><Link to="/">Back</Link></div>
                <div className="layout-header">{article.title}</div>
                <div className="articles-template">
                    <div className="article-publish-info">
                        <div>{article?.published_date}</div>
                        <div>{article?.type}</div>
                    </div>
                    {article?.media?.length > 0 ?
                        <div className="article-image">
                            <img src={getImage()} />
                        </div> :
                        null}
                    <p className="article-description">{article.abstract}</p>
                    <p className="article-description">{article?.adx_keywords}</p>
                    <div className="article-by">-&nbsp;<i>{article?.byline}</i></div>
                    <div className="article-read-more"><Link target="_blank" to={`${article.url}`}>Read More</Link></div>
                </div>
            </div>
        </>
    )
}

export default ArticleDetail;