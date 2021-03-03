import './App.css';
import Button from '@material-ui/core/Button';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Button variant="contained" color="primary">
        hello
      </Button>
      <News></News>
    </div>
  );
}

export default App;
