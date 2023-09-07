import { useState, useEffect } from "react";
import Prismic from "@prismicio/client";

const usePrismic = () => {
  const [residentsData, setResidentsData] = useState(null);

  useEffect(() => {
    const Client = Prismic.client(process.env["https://ehfm.cdn.prismic.io/api/v2"]);

    const fetchData = async () => {
      try {
        Client.query(Prismic.Predicates.at("document.type", "show"), {
          pageSize: 200,
          orderings: "[my.show.show_title]",
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
      } catch (err) {
        console.error("fetchData err", err);
      }
    };

    fetchData();
  }, []);

  return { residentsData };
};

export default usePrismic;

const fetchAllPages = (url, results) => {
  return fetch(url)
    .then((res) =>
      res
        .json()
        .then((res) => {
          results = [...results, ...res.results];
          if (res.next_page) {
            return fetchAllPages(url, results);
          } else {
            return results;
          }
        })
        .catch((err) => results)
    )
    .catch((err) => results);
};
