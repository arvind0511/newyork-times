import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyRecords from "../EmptyRecords";
import Header from "../Header";

const ArticleList = (props) => {
    const { articles, setPage } = props
    const [orderedArticles, setOrderedArticles] = useState([])

    useEffect(() => {
        let orderList = Object.assign([], articles)
        orderList.sort((a, b) => {
            return new Date(b.published_date) - new Date(a.published_date);
        });
        setOrderedArticles(orderList)
    }, [articles])

    const getImage = (article) => {
        return article?.media[0]?.['media-metadata'][0].url
    }

    const ArticleTab = (props) => {
        const { article, index } = props
        return (
            <div className={`article-layout ${index === 0 ? `trending` : 'short-layout'}`} key={article.id}>
                <Link to={`/article/${article.id}`}>
                    <div className="article-title">{article.title}</div>
                    <div className="article-short-image">
                            <img src={getImage(article)} />
                        </div>
                    <div className="article-description">{article.abstract}</div>
                    <div className="article-by">-&nbsp;{article?.byline}</div>
                </Link>
            </div>
        )
    }
    return (
        <>
          <div className="artice-pages">
                <div className="page-link" onClick={() => setPage(1)}>1 day</div>
                <div className="page-link" onClick={() => setPage(7)}>7 days</div>
                <div className="page-link" onClick={() => setPage(30)}>30 days</div>
            </div>
            <Header />
            {articles?.length > 0 ?
                <div className="article-layout-container">
                    <div className="layout-header">Trending</div>
                    <div className="articles-container">
                        {orderedArticles?.map((article, index) => {
                            return <ArticleTab article={article} index={index} />
                        })
                        }
                    </div>
                </div>
                :
                <EmptyRecords records="articles" />
            }
          
        </>
    )
}

export default ArticleList;