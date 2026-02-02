import React from 'react'
import Sidebar from "./components/Sidebar";
import Player from './components/Player';
import Display from './components/Display';

function App() {
  return (
    <div className="h-screen flex bg-black">
      <Sidebar />
      <Display/>
      <Player/>
    </div>
  );
}

export default App;
