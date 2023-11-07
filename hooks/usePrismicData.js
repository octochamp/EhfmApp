import { useState, useEffect } from "react";
import { client } from "../components/prismic";
import prismic from "@prismicio/client";

export const usePrismic = () => {
  const [aboutPageData, setAboutData] = useState(null);
  const [supportPageData, setSupportData] = useState(null);
  const [residentsData, setResidentsData] = useState(null);
  const [allCarouselItems, setAllCarouselItems] = useState(null);
  const [additionalCarousels, setAdditionalCarousels] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutResponse = await client.getByType('about', { pageSize: 1 });
        setAboutData(aboutResponse.results[0] || null);

        const supportResponse = await client.getByType('support', { pageSize: 1 });
        setSupportData(supportResponse.results[0] || null);

        const residentsResponse = await client.getByType('show', {
          pageSize: 200,
          orderings: "my.show.show_title"
        });
        setResidentsData(residentsResponse.results || []);

        const homeFeatureResponse = await client.getByType('home_feature', {
          pageSize: 100,
          orderings: "my.home_feature.order"
        });
        setAllCarouselItems(homeFeatureResponse.results || []);

        const homeCarouselResponse = await client.getByType('home_carousel', { pageSize: 100 });
        setAdditionalCarousels(homeCarouselResponse.results || []);

      } catch (err) {
        console.error("fetchData err", err);
      }
    };

    fetchData();
  }, []);

  const carouselData = { allCarouselItems, additionalCarousels };

  return { aboutPageData, supportPageData, residentsData, carouselData };
};

export default usePrismic;

const fetchAllPages = async (url, results) => {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    results = [...results, ...resJson.results];
    if (resJson.next_page) {
      return fetchAllPages(resJson.next_page, results);
    }
    return results;
  } catch (err) {
    console.error("fetchAllPages err", err);
    return results;
  }
};
