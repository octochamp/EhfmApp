import React, {useEffect, useState} from 'react';
import {Text, Button} from 'react-native';
import useCurrentShowData from './hooks/useCurrentShowData';
import useNextShowData from './hooks/useNextShowData';
import RadioPlayer from './components/RadioPlayer';
import Schedule from './components/Schedule';
import ShowImage from './components/ShowImage';
import usePrismicData from './hooks/usePrismicData';

const App = () => {
  // get show data from useCurrentShowData() and useNextShowData()
  const currentShowData = useCurrentShowData();
  const nextShowData = useNextShowData();
  const { aboutPageData, supportPageData, residentsData, carouselData } =
    usePrismicData();
  return (
    <>
      <RadioPlayer />
      <Schedule
        currentShowData={currentShowData}
        nextShowData={nextShowData}
      />
      <ShowImage
        currentShowData={currentShowData}
        residentsData={residentsData}
      />
    </>
  )
};

export default App;
