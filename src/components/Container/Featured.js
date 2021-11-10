import React from "react";
import { useStore } from "../../contexts/Store";
import styled from "styled-components";
const Featured = () => {
  const store = useStore();
  const { featuredArticle, getFeaturedArticle: getFeatured, articles } = store;

  //'featured' below holds an object of info of the latest featured article, please see Store.js for more logic details about 'getFeatured()'.
  const featured = getFeatured(articles);
  return (
    <Wrap>
      <ImageWrap>
        <Img src="https://via.placeholder.com/775x452" />
      </ImageWrap>
      <BodyWrap>
        <h3>{featured.fields.title}</h3>
        <p>{featured.fields.content}</p>
        <a href="#">Read More</a>
      </BodyWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0;
  height: 450px;
  width: 100%;

  background-color: white;
  border-top: solid 3px #212020;
  display: flex;
  margin-bottom: 20px;
  border-bottom: solid 3px #212020;
  padding: 40px 0;
  @media (max-width: 1200px) {
    display: flex;
    flex-flow: column;
    height: auto;
  }
`;

const ImageWrap = styled.div`
  height: auto;
  width: 100%;
  &a {
    color: black;
    text-decoration: none;
  }
`;

const Img = styled.img`
  float: left;
  margin: 0px;
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-size: cover !important;
  background-position: center !important;
  overflow: hidden;
`;

const BodyWrap = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  float: left;
  padding: 5px 20px 20px 30px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  &::after {
    clear: both;
  }

  h3 {
    color: #212020;
    font-weight: 600;
    margin: 16px 0;
    font-size: 2rem;
    @media (max-width: 1024px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 15px 0;
  }

  @media (max-width: 1105px) {
    height: 230px;
  }
  @media (max-width: 882px) {
    height: 180px;
  }
  @media (max-width: 880px) {
    width: 100%;
  }
`;

export default Featured;
