import { Box } from "./styled-components";
import React, { useContext } from "react";
import { useStore, StoreContext } from "../../contexts/Store";
function Container({ children }) {
  const {
    featuredArticle,
    getFeaturedArticle: getFeatured,
    articles,
  } = useStore();

  return <Box>{children}</Box>;
}

export default Container;
