import { useState, useEffect } from 'react';
import Templates from './temp';
import Meme from './meme';
import './App.css';

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setmeme] = useState(null)
  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      })
  }, []);
  return (
    <div className="App">
      <h1>meme generator</h1>
      {meme === null ? (
        <Templates templates={templates} setmeme={setmeme} />
      ) :
        <Meme meme={meme} setmeme={setmeme} />}
    </div>
  );
}

export default App;
