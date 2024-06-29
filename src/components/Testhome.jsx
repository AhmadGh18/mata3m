import React from "react";
import { useQuery } from "react-query";
import file from "./file.json"; // Directly import the JSON file

const Testhome = () => {
  const { isLoading, data } = useQuery("super-key", () => {
    return Promise.resolve({ data: file }); // Return the imported file as a resolved promise
  });

  if (isLoading) {
    return "Loading";
  }

  return (
    <div>
      {data &&
        data.data.map((el) => {
          return <p key={el.id}>{el.name}</p>;
        })}
    </div>
  );
};

export default Testhome;
