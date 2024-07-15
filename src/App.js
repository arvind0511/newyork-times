import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import { fetchArticles } from './services/api';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [getPage, setPage] = useState(1);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles(getPage);
      setArticles(data);
    };

    getArticles();
  }, [getPage]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ArticleList articles={articles} setPage={setPage}/>} />
        <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
    </Router>
  );
}

export default App;
