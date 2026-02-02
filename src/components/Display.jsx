import React, { useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef(null)
  const location = useLocation()

  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.split("/").pop() : null
  const albumData = albumsData[Number(albumId)]

  useEffect(() => {
    if (isAlbum && albumData && displayRef.current) {
      displayRef.current.style.background =
        `linear-gradient(${albumData.bgColor}, #121212)`
    } else if (displayRef.current) {
      displayRef.current.style.background = '#121212'
    }
  }, [isAlbum, albumData])

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pb-[10%] rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route index element={<DisplayHome />} />
        <Route path="album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
