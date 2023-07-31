import React, {useEffect, useState} from 'react';
import {Text, Button} from 'react-native';
import RadioPlayer from './components/RadioPlayer';
import Schedule from './components/Schedule';

const App = () => {

  return (
    <>
      <RadioPlayer />
      <Schedule />
    </>
  )
};

export default App;
