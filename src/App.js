import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/Container/ArticleCard";
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
          {articles
            .filter((item) => {
              return item.fields.featured === false;
            })
            .map((el) => {
              return <ArticleCard el={el} />;
            })}
          <h1>Hello 🌎</h1>
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
