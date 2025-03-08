import axios from "axios";
import React, { useState } from "react";

const Search = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:8080/employee/search/${id}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <h2>Search Data</h2>
      <input
        type="text"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {data && (
        <div>
          <h3>Employee Details:</h3>
          <p>{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
