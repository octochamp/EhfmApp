import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    SHOW_NOT_FOUND,
    getShowInPrismic,
    parseShowName,
    sanitiseString,
  } from "../helpers";

const ShowImage = ({currentShowData, residentsData}) => {

    const [prismicShow, setPrismicShow] = useState(null);
    const PlaceHolderImage = require('../assets/images/placeholder-showimg.jpg');

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
        );
      };
    
      const returnImage = () => {
        if (prismicShowImgUrl()) {
          return (
            <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{ uri: prismicShowImgUrl() }}
            />
            </View>
          );
        } else if (airTimeShowImgUrl()) {
            return (
                <View style={styles.container}>
                <Image
                style={styles.logo}
                source={{ uri: airTimeShowImgUrl() }}
                />
                </View>
            );
        } else {
          return (
            <View style={styles.container}>
            <Image
              style={styles.logo}
              source={PlaceHolderImage} //Placeholder local image
            />
            </View>  
          )
        }
      };

    return (
      returnImage()
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    logo: {
      width: 200, // You can adjust the width to your preference
      height: 200, // You can adjust the height to your preference
      resizeMode: 'contain', // This ensures the image scales correctly within the dimensions
    },
  });

export default ShowImage;