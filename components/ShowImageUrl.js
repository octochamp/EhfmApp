import { useEffect, useState } from 'react';
import {
  SHOW_NOT_FOUND,
  getShowInPrismic,
} from "../helpers";

const ShowImageUrl = ({ currentShowData, residentsData }) => {

  const [prismicShow, setPrismicShow] = useState(null);
  const placeHolderImageUrl = require('../assets/images/placeholder-showimg.jpg');

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

  const returnImageUrl = () => {
    if (prismicShowImgUrl()) {
      //console.log('prismicShowImgUrl', prismicShowImgUrl());
      return prismicShowImgUrl();
    } else if (airTimeShowImgUrl()) {
      //console.log('airTimeShowImgUrl', airTimeShowImgUrl());
      return airTimeShowImgUrl();
    } else {
      //console.log('placeHolderImageUrl', placeHolderImageUrl);
      return placeHolderImageUrl;
    }
  };

  return (
    returnImageUrl()
  );
};

export default ShowImageUrl;