import React, {useEffect, useState} from 'react';
import {Text, Button, Image} from 'react-native';
import RadioPlayer from './components/RadioPlayer';
import Schedule from './components/Schedule';
import CurrentShowImage from './components/CurrentShowImage';
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";

const App = () => {

  const { residentsData } = usePrismicData();
  const currentShowData = useCurrentShowData();

  return (
    <>
      <RadioPlayer />
      <Schedule />
      <CurrentShowImage
        currentShow={currentShowData}
        residentsData={residentsData}
      />
    </>
  )
};

export default App;
