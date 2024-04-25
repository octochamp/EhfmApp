import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { Capability } from 'react-native-track-player';
import { styles } from '../styles';

const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: '1',
    url: 'https://ehfm.out.airtime.pro/ehfm_a',
    title: 'live',
    album: 'ehfm',
    artist: 'ehfm',
    artwork: 'https://picsum.photos/100',
    isLiveStream: true,
  });
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
    ],
    progressUpdateEventInterval: 2,
  });
  return true;
};

const RadioPlayer = () => {
  // Maybe/maybe not working? Code to disable play button before initialisation from https://therohanbhatia.com/blog/music-player-app-using-react-native-hooks/
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    }
    startPlayer();
  }, []);

  // useState for Button to control playback
  const [isPlaying, setIsPlaying] = useState(false);

  // usePlaybackState event listener for playback state
  // allows remote media controls to update Button state
  const playerState = usePlaybackState();
  const trueIfPlaying = playerState === State.Playing;

  const onButtonPressed = () => {
    if (!trueIfPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <Text style={styles.bodyText}>ehfm prototype app</Text>
      <Button
        title={trueIfPlaying ? "Stop" : "Play"}
        onPress={onButtonPressed}
      />

    </>
  );
};

export default RadioPlayer;