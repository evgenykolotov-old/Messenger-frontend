import { useState, useRef, useEffect } from 'react';

export const useMessageAudio = () => {
  const audioElem = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  useEffect(() => {
    audioElem.current.addEventListener(
      'playing',
      () => {
        setPlaying(true);
      },
      false
    );

    audioElem.current.addEventListener(
      'ended',
      () => {
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );

    audioElem.current.addEventListener(
      'pause',
      () => {
        setPlaying(false);
      },
      false
    );

    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);
  return { isPlaying, progress, currentTime, togglePlay, audioElem };
};
