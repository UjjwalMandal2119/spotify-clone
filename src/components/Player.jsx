import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[10%] bg-black flex items-center text-white px-4">

      {/* LEFT */}
      <div className="w-1/3 hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} />
        <div>
          <p>{songsData[0].name}</p>
          <p className="text-gray-400 text-sm">
            {songsData[0].desc.slice(0, 12)}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="w-1/3 flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} />
          <img className="w-5 cursor-pointer" src={assets.play_icon} />
          <img className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon_icon} />
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-400">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-600 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/3 hidden lg:flex items-center justify-end gap-3 opacity-75">
        <img className="w-4" src={assets.plays_icon} />
        <img className="w-4" src={assets.mic_icon} />
        <img className="w-4" src={assets.queue_icon} />
        <img className="w-4" src={assets.speaker_icon} />
        <img className="w-4" src={assets.volume_icon} />
        <div className="w-20 bg-slate-50 h-1 rounded-full" />
        <img className="w-4" src={assets.mini_player_icon} />
        <img className="w-4" src={assets.zoom_icon} />
      </div>

    </div>
  )
}

export default Player
