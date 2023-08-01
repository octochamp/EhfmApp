import { useState, useEffect, useCallback } from "react";
import useHourTick from "./useHourTick";

export const useNextShowData = () => {
  const [nextShowData, setNextShowData] = useState(null);
  const hourTick = useHourTick();

  const nextShowApiCall = useCallback(() => {
    fetch("https://ehfm.airtime.pro/api/live-info")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.nextShow && data.nextShow[0])
          setNextShowData(data.nextShow[0]);
      })
      .catch((err) => {
        setNextShowData(null);
      });
  }, []);

  useEffect(() => {
    nextShowApiCall();
  }, [nextShowApiCall, hourTick]);

  return nextShowData;
};

export default useNextShowData;
