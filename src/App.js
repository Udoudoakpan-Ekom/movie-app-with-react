import { useEffect } from "react";

// 82042bb3

const API_URL = "http://www.omdbapi.com?apikey=82042bb3";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>;
    </div>
  );
};

export default App;
