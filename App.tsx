import React, { useEffect, useState } from 'react';
import { Text, Button, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import ShowImage from './components/ShowImage';
import usePrismicData from './hooks/usePrismicData';
import useCurrentShowData from './hooks/useCurrentShowData';
import useNextShowData from './hooks/useNextShowData';
import { styles } from './styles';


const App = () => {
  // get show data from useCurrentShowData() and useNextShowData()
  const currentShowData = useCurrentShowData();
  const nextShowData = useNextShowData();
  const { aboutPageData, supportPageData, residentsData, carouselData } =
    usePrismicData();

  return (
    <>
      <ShowImage currentShowData={currentShowData} residentsData={residentsData} >
        <Overlay>
          <View style={styles.container}>
            <View style={styles.menuOverlay}>
              <Text>This text is a child of menuContainer</Text>
            </View>
            <View style={styles.headerContainer}>
              <Header />
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
