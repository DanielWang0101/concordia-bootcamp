import React from "react";
import styled from "styled-components";

const ArticleCard = ({ el }) => {
  return (
    <Wrap>
      <ImageWrap>
        <a href="#">
          <Img src="https://via.placeholder.com/366x180" />
        </a>
      </ImageWrap>
      <PostHeader>
        <H2>{el.fields.title}</H2>
      </PostHeader>

      <Categories>{el.fields.category}</Categories>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: calc(50% - 20px);
  float: none;
  margin: 0 10px 30px;
  display: flex;
  flex-flow: column;
`;

const ImageWrap = styled.div`
  height: 180px;

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
`;

const PostHeader = styled.div`
  padding: 30px 30px 50px;
  height: 100%;
  &::after {
    clear: both;
  }
`;

const H2 = styled.h2`
  font-size: 36px;
  line-height: 40px;
`;

const Categories = styled.p`
  align-self: flex-start;
  justify-self: flex-end;
  &a {
    color: black;
    text-decoration: none;
  }
`;
export default ArticleCard;
