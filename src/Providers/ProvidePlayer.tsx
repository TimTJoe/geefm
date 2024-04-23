import React, { createContext, useContext, useState } from "react";
const url = import.meta.env.VITE_STREAM_URL_TEST;

interface IPlayer {
  children: React.ReactNode;
}

const withPlayer = createContext<any | undefined>(undefined);

const ProvidePlayer: React.FC<IPlayer> = ({ children }) => {
    const [values, setValues] = useState({
        playing: false,
        volume: 0.8,
        duration: 200,
        progress: {}
    })

    const handlePlay = () => {
        setValues({ ...values, playing: !values.playing })
    }

    const handleDuration = (duration: any) => {
        setValues({ ...values, duration:duration })
    }

    const handleProgress = (progress:any) => {
        setValues({ ...values, progress: progress })
        console.log(values.progress)
    }

    const contextValues = {
        url,
        handlePlay,
        playing: values.playing,
        duration: values.duration,
        handleDuration,
        progress: values.progress,
        handleProgress
  };

  return (
    <withPlayer.Provider value={contextValues}>{children}</withPlayer.Provider>
  );
};

const usePlayer = () => {
  const context = useContext(withPlayer);
  if (!context) {
    console.error("usePlayer must be used in ProvidePlayer context provider");
  }
  return context;
};

export { ProvidePlayer, usePlayer };
