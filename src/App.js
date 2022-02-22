import { useState } from 'react';
import Board from './Board';
import Button from './button';
import './App.css';
import AppLogo from './assets/logo.png'

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherMyHistory] = useState([]);

  const handleRollclick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);  // ... -> 이전 배열을 불러옴
    setOtherMyHistory([...otherHistory, nextOtherNum]);  // ... -> 이전 배열을 불러옴
  };

  const handleclearClick = () => {
    setMyHistory([]);
    setOtherMyHistory([]);
  };

  return (
    <div className='App'>
      <div>
        <img class="App-logo" src={AppLogo} alt="주사위게임 로고" />
        <h1 class="App-title">주사위게임</h1>
        <div>
          <Button className='App-button' onClick={handleRollclick} color="blue">던지기</Button>
          <Button className='App-button' onClick={handleclearClick} color="red">처음부터</Button>
        </div>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory}/>
        <Board name="상대" color="red" gameHistory={otherHistory}/>
      </div>
    </div>
  );
}

export default App;