import YouTube from 'react-youtube';
import './App.scss';
import { useRef } from 'react';

function App() {

  const playerRef = useRef();

  const opts = {
    width: '100%',
    height: '500vh',
    playerVars: {
      'autoplay': 1,
      'controls': 0
    },
  }

  function onReady(event) {
    // access to player in all event handlers via event.target
    playerRef.current = event.target;
  }

  function play() {
    if (!!playerRef.current) {
      playerRef.current.playVideo();
    }
  }

  function stop() {
    if (!!playerRef.current) {
      playerRef.current.stopVideo();
    }
  }

  return (
    <div className="App">
      <header>
        <div className="header_container">
          <nav>
            <a href="./index.html" active="true">home</a><a href="./index.html">about</a><a href="./index.html">contacts</a>
          </nav>
          <div className="userauth">no user</div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="container-video animated-grain">
            <YouTube videoId="07wjiNny3W8" opts={opts} onReady={onReady} />
          </div>
          <div className="container-tv">
            <img src="images/tv1.png" alt="decoration element" />
          </div>
          <div className="container-foreplane">
            <img src="images/foreplane1.png" alt="decoration element" />
          </div>
          <div className='controls'>
            <button type='button' onClick={play}>Turn on!</button>
            <button type='button' onClick={stop}>Stop it!</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
