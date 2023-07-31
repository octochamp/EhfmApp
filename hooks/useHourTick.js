import { useState, useEffect, useCallback } from "react";

const useHourTick = () => {
  const [hourTick, setHourTick] = useState(0);

  const msUntilFirstCall = useCallback(() => {
    const date = new Date();
    const currentHour = date.getUTCHours();
    date.setUTCHours(currentHour + 1);
    date.setUTCMinutes(1);
    date.setUTCSeconds(0);
    const targetMillis = date.getTime();
    const currentMillis = Date.now();
    const timeDifference = targetMillis - currentMillis;
    return timeDifference;
  }, []);

  useEffect(() => {
    const getInterval = () => {
      if (hourTick === 0) {
        return msUntilFirstCall();
      } else {
        return 3600000;
      }
    };
    const interval = getInterval();

    const timer = setInterval(() => setHourTick(hourTick + 1), interval);
    return () => clearInterval(timer);
  }, [hourTick, msUntilFirstCall]);

  return hourTick;
};

export default useHourTick;
