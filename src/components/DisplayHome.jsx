import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { assets, songsData, albumsData } from '../assets/assets'

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      {/* Albums */}
      <div className="mb-6">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex gap-4 overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Songs */}
      <div className="mb-6">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex gap-4 overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
