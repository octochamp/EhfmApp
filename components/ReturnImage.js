import React, { useState, Image } from "react";
import GetImageUrl from "../helpers/GetImageUrl";

const ReturnImage = ({ baseUrl, width, height, fit, alt, noFadeIn, ...props }) => {
  const url = GetImageUrl({ baseUrl, width, height, fit });
  return (
    <Image
      src={url}
      alt={alt}
    />
  );
};

export default ReturnImage;