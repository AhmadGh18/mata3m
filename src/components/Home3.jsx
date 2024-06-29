import axios from "axios";
import React, { useEffect, useState } from "react";
import file from "./file.json"; // Directly import the JSON file

const Home3 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating a fetch request using setTimeout

        setData(file); // Setting data to the imported JSON file
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message); // Set error state with error message
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
};

export default Home3;
