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

  console.log("currentShowData: ", currentShowData)
  if (residentsData) {
    console.log("### residentsData found from Prismic")
  } else {
    console.log("### no residentsData found from Prismic")
  }

  return (
    <>
      <ShowImage currentShowData={currentShowData} residentsData={residentsData} >
        <Overlay>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Header />
            </View>
            <View style={styles.footerContainer}>
              <Footer />
            </View>
          </View>
        </Overlay>
      </ShowImage>
    </>
  )
};

export default App;
