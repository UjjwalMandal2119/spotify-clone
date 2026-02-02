import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext(null);

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 },
  });

  const play = () => setPlayStatus(true);
  const pause = () => setPlayStatus(false);

  const playWithId = (id) => {
    setTrack(songsData[id]);
    setPlayStatus(true);
  };

  const previous = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      setPlayStatus(true);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      setPlayStatus(true);
    }
  };

  const seekSong = (e) => {
    const width = seekBg.current.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickX / width) * duration;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      const current = audio.currentTime;
      const duration = audio.duration || 0;

      seekBar.current.style.width =
        (current / duration) * 100 + "%";

      setTime({
        currentTime: {
          minute: Math.floor(current / 60),
          second: Math.floor(current % 60),
        },
        totalTime: {
          minute: Math.floor(duration / 60),
          second: Math.floor(duration % 60),
        },
      });
    };

    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    playStatus ? audioRef.current.play() : audioRef.current.pause();
  }, [track, playStatus]);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBg,
        seekBar,
        track,
        playStatus,
        time,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
