// THIS IS ALL JUST HERE BECAUSE I HAD A CONSOLE WARNING AND I GOT CLAUDE TO REFACTOR SOME CODE
// BUT IT'S 3AM AND i'M NOT SURE WHAT CHANGED

// TOO TIRED TO CHECK AND I SHOULD HAVE DONE A GIT COMMIT BEFORE PASTING IT IN

// BUT IT SEEMS TO WORK SO I'M GOING WITH IT

// GOT THIS HERE IN CASE WE NEED IT THOUGH. SORRY IT'S MESSY x


import React, { useEffect, useState, useRef } from 'react';
import { Text, Button, View, Animated, Easing } from 'react-native';
import TrackPlayer, { State, usePlaybackState, usePlayWhenReady, Event, useTrackPlayerEvents } from 'react-native-track-player';
import { getPlaybackState } from 'react-native-track-player/lib/src/trackPlayer';
import { Capability } from 'react-native-track-player';
import { styles } from '../styles';
import { Pressable } from 'react-native';
import Svg, { Rect, Circle } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';

const PauseButtonInner = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273">
    <rect x="90.1" y="78.4" width="33.3" height="116.6" fill="#fff" stroke-width="0"/>
    <rect x="155.7" y="78.4" width="33.3" height="116.6" fill="#fff" stroke-width="0"/>
  </svg>
`;

const PauseButtonOuter = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273">
    <path d="M255.6,136.5c0,6-13,10.9-13.9,16.6s9.9,14.6,8.1,20.1-15.7,6.2-18.4,11.4,4.9,16.9,1.4,21.6-16.9.9-21.1,5.1-.6,17.6-5.4,21c-4.8,3.4-16.3-4.3-21.6-1.6s-5.9,16.5-11.5,18.3-14.2-9.1-20-8.2-10.6,13.9-16.6,13.9-10.9-13-16.6-13.9-14.5,10-20,8.2-6.3-15.7-11.5-18.3-16.8,5.1-21.6,1.6-1.2-16.9-5.4-21-17.6-.3-21.1-5.1c-3.5-4.7,4.1-16.4,1.4-21.6s-16.6-5.7-18.4-11.4,9-14.2,8.1-20.1c-.9-5.7-13.9-10.6-13.9-16.6s13-10.9,13.9-16.6c.9-5.9-9.9-14.6-8.1-20.1s15.7-6.2,18.4-11.4-4.9-16.9-1.4-21.6c3.5-4.7,16.9-.9,21.1-5.1s.6-17.6,5.4-21c4.8-3.4,16.3,4.3,21.6,1.6s5.9-16.5,11.5-18.3,14.2,9.1,20,8.2,10.6-13.9,16.6-13.9,10.9,13,16.6,13.9,14.5-10,20-8.2,6.3,15.7,11.5,18.3,16.8-5.1,21.6-1.6,1.2,16.9,5.4,21,17.6.3,21.1,5.1-4.1,16.4-1.4,21.6,16.6,5.7,18.4,11.4-9,14.2-8.1,20.1c.9,5.7,13.9,10.6,13.9,16.6Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.9"/>
  </svg>
`;

const PlayButton = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273" >
    <polygon id="Play" points="201.8 136.4 99.4 77.2 99.4 195.5 201.8 136.4" fill="#fff" fill-rule="evenodd" stroke-width="0"/>
    <ellipse id="Play_Circle" data-name="Play Circle" cx="136.5" cy="136.5" rx="112.8" ry="111.8" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.9"/>
  </svg>
`;

const BufferingButtonOuter = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273">
    <polygon id="Play" points="201.8 136.4 99.4 77.2 99.4 195.5 201.8 136.4" display="none" fill="#1d1d1b" fill-rule="evenodd"/>
    <ellipse id="Play_Circle" cx="136.5" cy="136.5" rx="112.8" ry="111.8" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.9"/>
    <circle cx="56.7" cy="56.7" r="11.7" fill="#fff"/>
  </svg>
`;

const BufferingButtonInner = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 273 273">
    <circle cx="204.6" cy="151.6" r="7.3" fill="#fff"/>
    <circle cx="68.4" cy="121.3" r="7.3" fill="#fff"/>
    <circle cx="121.2" cy="205.2" r="7.3" fill="#fff"/>
    <circle cx="151.8" cy="67.8" r="7.3" fill="#fff"/>
    <circle cx="174" cy="195.4" r="7.3" fill="#fff"/>
    <circle cx="99.1" cy="77.6" r="7.3" fill="#fff"/>
    <circle cx="77.1" cy="174.3" r="7.3" fill="#fff"/>
    <circle cx="195.9" cy="98.7" r="7.3" fill="#fff"/>
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
      Capability.Stop,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
    ],
    progressUpdateEventInterval: 2,
  });
  return true;
};

const ControlButton = ({ onPress, isPlaying, isBuffering }) => {
  if (isBuffering) {
    // Create two separate rotation values for inner and outer circles
    const outerRotation = useRef(new Animated.Value(0)).current;
    const innerRotation = useRef(new Animated.Value(0)).current;

    const startRotations = () => {
      // Outer rotation - slower
      Animated.loop(
        Animated.timing(outerRotation, {
          toValue: 1,
          duration: 900, // Outer rotation speed (higher is slower)
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();

      // Inner rotation - faster
      Animated.loop(
        Animated.timing(innerRotation, {
          toValue: 1,
          duration: 2000, // Inner rotation speed (higher is slower)
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    const outerRotate = outerRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const innerRotate = innerRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    // Start both animations
    useEffect(() => {
      startRotations();
    }, []);

    return (
      <Pressable onPress={onPress}>
        <View style={styles.playerButton}>
          <View style={{ aspectRatio: 1, position: 'relative' }}>
            <Animated.View
              style={[
                {
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transform: [{ rotate: innerRotate }]
                }
              ]}
            >
              <SvgXml xml={BufferingButtonInner} height="100%" width="100%" />
            </Animated.View>
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transform: [{ rotate: outerRotate }]
                }
              ]}
            >
              <SvgXml xml={BufferingButtonOuter} height="100%" width="100%" />
            </Animated.View>
          </View>
        </View>
      </Pressable>
    );
  } else {
    if (isPlaying) {
      // Create a rotation values for outer circle
      const playingRotation = useRef(new Animated.Value(0)).current;

      const startRotations = () => {
        Animated.loop(
          Animated.timing(playingRotation, {
            toValue: 1,
            duration: 8000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();
      };

      const playingRotate = playingRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });

      // Start both animations
      useEffect(() => {
        startRotations();
      }, []);
      return (
        <Pressable onPress={onPress}>
          <View style={styles.playerButton}>
            <View style={{ aspectRatio: 1, position: 'relative' }}>
              <Animated.View
                style={[
                  {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transform: [{ rotate: playingRotate }]
                  }
                ]}
              >
                <SvgXml xml={PauseButtonOuter} height="100%" width="100%" />
              </Animated.View>
              <View
                style={[
                  {
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                  }
                ]}
              >
                <SvgXml xml={PauseButtonInner} height="100%" width="100%" />
              </View>
            </View>
          </View>
        </Pressable>
      )
    } else {
      return (
        <Pressable onPress={onPress}>
          <View style={styles.playerButton}>
            <View style={{ aspectRatio: 1 }}>
              <SvgXml xml={PlayButton} height="100%" width="100%" />
            </View>
          </View>
        </Pressable>
      )
    }
  }
};

const RadioPlayer = () => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useTrackPlayerEvents([Event.PlaybackState], (event) => {
    switch (event.state) {
      case State.Buffering:
        setIsBuffering(true);
        setIsPlaying(false);
        break;
      case State.Playing:
        setIsBuffering(false);
        setIsPlaying(true);
        break;
      default:
        setIsBuffering(false);
        setIsPlaying(false);
    }
  });

  const onTogglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.stop();
    } else {
      await TrackPlayer.play();
    }
  };

  return (
    <>
      {/*       BUTTONS FOR DEBUGGING        */}
      {/* <Button title="Start" onPress={() => TrackPlayer.play()} />
      <Button title="Stop" onPress={() => TrackPlayer.stop()} />
      <Text>The TrackPlayer is {isPlaying ? 'playing' : 'not playing'}</Text> */}
      <ControlButton onPress={onTogglePlayback} isPlaying={isPlaying} isBuffering={isBuffering} />
    </>
  );
}

export default RadioPlayer;
export { trackPlayerInit };