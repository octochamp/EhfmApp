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
        await client.get({
          filters: prismic.filter.at("document.type", "about"),
          pageSize: 1,
        }).then((response) => {
          response && setAboutData(response.results[0]);
        });

        await client.get({
          filters: prismic.filter.at("document.type", "support"),
          pageSize: 1,
        }).then((response) => {
          response && setSupportData(response.results[0]);
        });

        // For sorting, refer to the updated syntax for 'orderings' in the documentation
        await client.get({
          filters: prismic.filter.at("document.type", "show"),
          pageSize: 200,
          orderings: [{ field: "my.show.show_title", direction: "asc" }],
        }).then(async (response) => {
          if (response) {
            let results = response.results;
            if (response.next_page) {
              results = await fetchAllPages(response.next_page, results);
            }
            setResidentsData(results);
          } else {
            setResidentsData([]);
          }
        });

        await client.get({
          filters: prismic.filter.at("document.type", "home_feature"),
          pageSize: 100,
          orderings: [{ field: "my.home_feature.order", direction: "asc" }], // Assuming 'order' is the correct field
        }).then((response) => {
          response && setAllCarouselItems(response.results);
        });

        await client.get({
          filters: prismic.filter.at("document.type", "home_carousel"),
          pageSize: 100,
        }).then((response) => {
          response && setAdditionalCarousels(response.results);
        });
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
