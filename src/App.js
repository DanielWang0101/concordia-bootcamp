import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/Container/ArticleCard";
import styled from "styled-components";
import Featured from "./components/Container/Featured";

function App() {
  const store = useStore();
  const { featuredArticle, getFeaturedArticle: getFeatured, articles } = store;
  const featured = getFeatured(articles);
  console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          <H1>Blog</H1>
          <Wrap>
            <Featured />

            {articles
              .filter((item) => {
                return item.fields.featured === false;
              })
              .map((el) => {
                return <ArticleCard el={el} />;
              })}
          </Wrap>
        </Container>

        <Footer />
      </main>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: linear-gradient(to top, #ffefe200 0%, #ffefe2 10%);

  width: 100%;
`;

const H1 = styled.h1`
  margin: 40px 0;
  font-size: 30px;
  line-height: 36px;
`;
export default App;
