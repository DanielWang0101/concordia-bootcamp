import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";
import moment from "moment";
export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    })();
  }, []);

  // TODO: Update the method below to return the latest featured article from the list of articles
  const getFeatured = (arr) => {
    let results = arr.filter((el) => {
      return el.fields.featured === true;
    });

    let result = results.reduce(
      (acc, curr) => {
        if (
          moment(acc.fields.date).valueOf() > moment(curr.fields.date).valueOf()
        )
          return acc;
        else return curr;
      },
      { fields: { date: 0 } }
    );
    console.log("🚀 ~ result", result);
    return result;
  };

  return (
    <StoreContext.Provider
      value={{ featuredArticle, getFeaturedArticle: getFeatured, articles }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
