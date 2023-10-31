import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

import { useEffect, useState } from "react";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      isLoading(true);
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, []);
  return <h2>Tours Starter</h2>;
};
export default App;
