import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import {
    SHOW_NOT_FOUND,
    getShowInPrismic,
    parseShowName,
    sanitiseString,
  } from "../helpers/PrismicHelper";
import PlaceholderImage from "../assets/images/placeholder-showimg.jpg";
import GetImageUrl from "../helpers/GetImageUrl";


function CurrentShowImage( {currentShow, residentsData }) {
    const [prismicShow, setPrismicShow] = useState(null);
    useEffect(() => {
        setPrismicShow(getShowInPrismic({ residentsData, currentShow }));
      }, [currentShow, residentsData]);

    const airTimeShowImgUrl = () => {
    return currentShow && currentShow.image_path;
    };
    
    const prismicShowImgUrl = () => {
    return (
        prismicShow &&
        prismicShow !== SHOW_NOT_FOUND &&
        prismicShow.data.show_image.url.split("&")[0]
    );
    };

    console.log(prismicShowImgUrl(), 500, 600, "crop");

    const returnImage = () => {
        if (prismicShowImgUrl()) {
          return (
            <>
            <Image
              src={GetImageUrl(baseUrl, 500, 600, "crop")}
              width={500}
              height={600}
              alt="current live show"
              fit={"crop"}
            />
          </>);
        } else if (airTimeShowImgUrl()) {
          return <Image src={airTimeShowImgUrl()} alt="current live show" />;
        } else {
          return <Image src={PlaceholderImage} alt="ehfm placeholder" />;
        }
      };

    return (
       // <Image source={PlaceholderImage} />
        <>
        {returnImage()}
        </>
    )
}

export default CurrentShowImage;