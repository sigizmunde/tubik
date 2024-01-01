import YouTube from 'react-youtube';
import './App.scss';
import { useEffect, useRef, useState } from 'react';
import useScreenSize from './utils/useScreenSize';

function App() {

  const playerRef = useRef();
  const [playTime, setPlayTime] = useState();
  const { height: clientHeight } = useScreenSize();

  const opts = {
    width: '100%',
    height: `${clientHeight / 2}px`,
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

  function getTime() {
    if (!!playerRef.current) {
      setPlayTime(playerRef.current.getMediaReferenceTime());
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getTime();
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  })

  return (
    <div className="App">
      <header>
        <div className="header_container">
          <nav>
            <a href="./index.html" active="true">home</a><a href="./index.html">about</a><a href="./index.html">contacts</a>
          </nav>
          <div className="playtime">{playTime}</div>
          <div className="userauth">no user</div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="container-video animated-grain">
            <YouTube videoId="3ehWXsLtPoY" opts={opts} onReady={onReady} />
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
