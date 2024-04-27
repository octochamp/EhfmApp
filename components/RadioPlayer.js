import React, { useEffect, useState } from 'react';
import { Text, Button, View } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { Capability } from 'react-native-track-player';
import { styles } from '../styles';
import { Pressable } from 'react-native';
import Svg, { Rect, Circle } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';

const PauseButton = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273">
    <rect x="90.1" y="78.4" width="33.3" height="116.6" fill="#fff" stroke-width="0"/>
    <rect x="155.7" y="78.4" width="33.3" height="116.6" fill="#fff" stroke-width="0"/>
    <path d="M255.6,136.5c0,6-13,10.9-13.9,16.6s9.9,14.6,8.1,20.1-15.7,6.2-18.4,11.4,4.9,16.9,1.4,21.6-16.9.9-21.1,5.1-.6,17.6-5.4,21c-4.8,3.4-16.3-4.3-21.6-1.6s-5.9,16.5-11.5,18.3-14.2-9.1-20-8.2-10.6,13.9-16.6,13.9-10.9-13-16.6-13.9-14.5,10-20,8.2-6.3-15.7-11.5-18.3-16.8,5.1-21.6,1.6-1.2-16.9-5.4-21-17.6-.3-21.1-5.1c-3.5-4.7,4.1-16.4,1.4-21.6s-16.6-5.7-18.4-11.4,9-14.2,8.1-20.1c-.9-5.7-13.9-10.6-13.9-16.6s13-10.9,13.9-16.6c.9-5.9-9.9-14.6-8.1-20.1s15.7-6.2,18.4-11.4-4.9-16.9-1.4-21.6c3.5-4.7,16.9-.9,21.1-5.1s.6-17.6,5.4-21c4.8-3.4,16.3,4.3,21.6,1.6s5.9-16.5,11.5-18.3,14.2,9.1,20,8.2,10.6-13.9,16.6-13.9,10.9,13,16.6,13.9,14.5-10,20-8.2,6.3,15.7,11.5,18.3,16.8-5.1,21.6-1.6,1.2,16.9,5.4,21,17.6.3,21.1,5.1-4.1,16.4-1.4,21.6,16.6,5.7,18.4,11.4-9,14.2-8.1,20.1c.9,5.7,13.9,10.6,13.9,16.6Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.9"/>
  </svg>
`;
const PlayButton = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273" >
    <polygon id="Play" points="201.8 136.4 99.4 77.2 99.4 195.5 201.8 136.4" fill="#fff" fill-rule="evenodd" stroke-width="0"/>
    <ellipse id="Play_Circle" data-name="Play Circle" cx="136.5" cy="136.5" rx="112.8" ry="111.8" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.9"/>
  </svg>
`;

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

const chooseButton = (playing) => {
  if (playing) {
    return (
      <View style={styles.playerButton}>
        <View style={{ aspectRatio: 1 }}>
          <SvgXml xml={PauseButton} height="100%" width="100%" />
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.playerButton}>
        <View style={{ aspectRatio: 1 }}>
          <SvgXml xml={PlayButton} height="100%" width="100%" />
        </View>
      </View>
    )
  }
}

const RadioPlayer = () => {
  // DEPRECATED BELOW: it used to initialize the TrackPlayer when the App component is mounted, but
  // it was calling more than once (every time the app rendered?) and trying to re-initialise. It
  // functioned but threw a warning each time. Now, instead, the player is initialised in App.tsx instead.
  // Leaving this here in case there was a reason for it to be done this way in the first place
/*   useEffect(() => {
    const startPlayer = async () => {
      try {
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
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
          ],
          compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
          ],
        });
      } catch (error) {
        console.log('Error initializing the track player', error);
      }
    };

    startPlayer();
  }, []); */

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
      <Pressable title={trueIfPlaying ? "Stop" : "Play"} onPress={onButtonPressed}>
        {chooseButton(trueIfPlaying)}
      </Pressable>
    </>
  );
}

export default RadioPlayer;
export { trackPlayerInit };