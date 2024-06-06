import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const App = () => {
  const [newsArticles, setNewsArticles] = useState();
  useEffect(() => {
    alanBtn({
      key: "68bcf7179ee08f8b48a11820568018032e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <>
      <NewsCards articles={newsArticles} />
    </>
  );
};

export default App;
