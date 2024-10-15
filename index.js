/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { PrismicProvider } from '@prismicio/react';
import { client } from './components/prismic';
import 'react-native-url-polyfill/auto';
import TrackPlayer from 'react-native-track-player';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Rect } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';

const AppWithPrismicProvider = () => (
  <NavigationContainer>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => AppWithPrismicProvider);

// Register the playback service
TrackPlayer.registerPlaybackService(() => require('./service'));