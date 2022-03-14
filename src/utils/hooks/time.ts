import { useState, useEffect } from "react";
import { calculateTime } from '../modules';
import { ITime } from '../types';
import { getTasks } from '../modules'


export const formatTime = (t: number) => {
  if(t < 10)
    return `0${t}`
  return `${t}`
}

;

export const useTimer = (_time: number, progress: number) => {
  const [time, SetTime] = useState<ITime>(calculateTime(_time, progress));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      SetTime(calculateTime(_time, progress));
    }, 1000);
  }, [time]);


  console.log("seconds => ", time.seconds)
  return time;
};
