import { useState, useEffect } from "react";

interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
}

export const formatTime = (t: number) => {
  if(t < 10)
    return `0${t}`
  return `${t}`
}

const calculateTime = (time: number): ITime => {
  let difference = +new Date() - +new Date(time);

  let timeLeft: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export const useTimer = (_time: number) => {
  const [time, SetTime] = useState<ITime>(calculateTime(_time));

  useEffect(() => {
    const timer = setTimeout(() => {
      SetTime(calculateTime(_time));
    }, 1000);
  }, [time]);

  console.log("seconds => ", time.seconds)
  return time;
};
