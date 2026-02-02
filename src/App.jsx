import React,{useContext} from 'react'
import Sidebar from "./components/Sidebar";
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return (
    <div className="h-screen flex bg-black">
      <Sidebar />
      <Display/>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;
