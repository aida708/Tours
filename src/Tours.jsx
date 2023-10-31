import React from "react";

export default function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const listOfTours = await response.json();
        setTours(listOfTours);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Tours</h2>
    </div>
  );
}
