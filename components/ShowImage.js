import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { styles } from '../styles';
import {
  SHOW_NOT_FOUND,
  getShowInPrismic,
  parseShowName,
  sanitiseString,
} from "../helpers";


const ShowImage = ({ currentShowData, residentsData, children }) => {

  const [prismicShow, setPrismicShow] = useState(null);
  const PlaceHolderImage = require('../assets/images/placeholder-showimg.jpg');

  // console.log("ShowImage.js // currentShowData: ", currentShowData);
  // console.log("ShowImage.js // Show in Prismic: ", getShowInPrismic({ residentsData, currentShowData }));

  useEffect(() => {
    setPrismicShow(getShowInPrismic({ residentsData, currentShowData }));
  }, [currentShowData, residentsData]);


  const airTimeShowImgUrl = () => {
    return currentShowData && currentShowData.image_path;
  };

  const prismicShowImgUrl = () => {
    return (
      prismicShow &&
      prismicShow !== SHOW_NOT_FOUND &&
      prismicShow.data.show_image.url.split("&")[0]
    )
  };;

  const returnImage = () => {
    if (prismicShowImgUrl()) {
      return (
        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={{ uri: prismicShowImgUrl() }}>
            {children}
          </ImageBackground>
        </View>
      );
    } else if (airTimeShowImgUrl()) {
      return (
        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={{ uri: airTimeShowImgUrl() }}>
            {children}
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View style={styles.backgroundImageContainer}>
          {/* for debug
          <Text>Placeholder image</Text> */}
          <ImageBackground style={styles.backgroundImage} source={PlaceHolderImage}>
            {children}
          </ImageBackground>
        </View>
      )
    }
  };

  return (
    returnImage()
  );
};

export default ShowImage;