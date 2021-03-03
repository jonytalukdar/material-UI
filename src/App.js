import './App.css';
import Button from '@material-ui/core/Button';
import News from './components/news/News';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=270e491750014e89a47d15979365477a'
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div className="App">
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;
