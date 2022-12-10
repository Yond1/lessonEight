import React from "react";
import { useJsonFetch } from "./../hooks/useJsonFetch";

const FetchComp = ({ url }) => {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{isLoading && "Is Loading"}</h1>
      <h1>{hasError && hasError}</h1>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <FetchComp url={"http://localhost:7070/data"} />
      <hr />
      <FetchComp url={"http://localhost:7070/error"} />
      <hr />
      <FetchComp url={"http://localhost:7070/loading"} />
      <hr />
    </div>
  );
};
