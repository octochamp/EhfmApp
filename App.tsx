import React, { useEffect, useState } from 'react';
import { Text, Button, View, Animated, StatusBar } from 'react-native';
import { trackPlayerInit } from './components/RadioPlayer';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import ShowImage from './components/ShowImage';
import usePrismicData from './hooks/usePrismicData';
import useCurrentShowData from './hooks/useCurrentShowData';
import useNextShowData from './hooks/useNextShowData';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';


const App = () => {
  // initialise the radio player
  useEffect(() => {
    async function prepare() {
      await trackPlayerInit();
    }
    prepare();
  }, []);

  // get show data from useCurrentShowData() and useNextShowData()
  const currentShowData = useCurrentShowData();
  const nextShowData = useNextShowData();
  const { aboutPageData, supportPageData, residentsData, carouselData } =
    usePrismicData();

  // Set menu invisible by default
  const [menuVisible, setMenuVisibility] = useState(false);
  const menuOpacity = new Animated.Value(0); // initial opacity set to 0 (completely transparent)
  const menuOverlayOpacity = new Animated.Value(0); // initial opacity set to 0 (completely transparent)

  useEffect(() => {
    if (menuVisible) {
      Animated.timing(menuOpacity, {
        toValue: 1,          // final value of the animated property
        duration: 300,       // time for animation to complete
        useNativeDriver: true,  // tells React Native's UI thread to perform the animations on its own native code
      }).start();             // start the animation
      Animated.timing(menuOverlayOpacity, {
        toValue: 1,          // final value of the animated property
        duration: 700,       // time for animation to complete
        useNativeDriver: true,  // tells React Native's UI thread to perform the animations on its own native code
      }).start();             // start the animation
      
    } else {
      Animated.timing(menuOpacity, {
        toValue: 0,          // final value of the animated property
        duration: 300,       // time for animation to complete
        useNativeDriver: true,  // tells React Native's UI thread to perform the animations on its own native code
      }).start(); 
      Animated.timing(menuOverlayOpacity, {
        toValue: 0,          // final value of the animated property
        duration: 700,       // time for animation to complete
        useNativeDriver: true,  // tells React Native's UI thread to perform the animations on its own native code
      }).start();            // start the animation
    }
  }, [menuVisible]);         // run this effect whenever menuVisible changes

  return (
    <>
    <StatusBar translucent backgroundColor='transparent' />
      <ShowImage currentShowData={currentShowData} residentsData={residentsData} >
        <Overlay>
          <View style={styles.container}>
            {menuVisible && (
              <Animated.View style={{ ...styles.menuOverlay, opacity: menuOverlayOpacity }}>
                <LinearGradient colors={['rgba(0,179,152,0)', 'rgba(0,179,152,0.9)']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0.5 }} style={styles.overlayGradient} />
              </Animated.View>
            )}
            <View style={styles.headerMenuContainer}>
              <View style={styles.header}>
                <Header menuVisibile={menuVisible} setMenuVisibility={setMenuVisibility} />
              </View>
              {menuVisible && (
                <Animated.View style={{ ...styles.menu, opacity: menuOpacity }}>
                  <Menu />
                </Animated.View>
              )}
            </View>
            <View style={styles.footerContainer}>
              <Footer currentShowData={currentShowData} nextShowData={nextShowData} residentsData={residentsData} />
            </View>
          </View>
        </Overlay>
      </ShowImage>
    </>
  )
};

export default App;
