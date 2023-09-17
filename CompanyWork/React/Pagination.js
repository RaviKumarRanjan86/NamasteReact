import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [beerName, setBeerName] = useState("");
  const [page, setPage] = useState(1);

  const makeAPICall = (page = 1, per_page = 25, beerName) => {
    const beerNameFinal = beerName.length > 0 ? `&beer_name=${beerName}` : "";
    fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}${beerNameFinal}`
    )
      .then((res) => res.json())
      .then((finalResponse) => setData(finalResponse));
  };

  useEffect(() => makeAPICall(page, 25, beerName), [beerName, page]);

  return (
    <div className="App">
      <select onChange={(e) => setPage(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <input type="text" onChange={(e) => setBeerName(e.target.value)} />
      {data.map((ele) => (
        <Beer {...ele} key={ele.name} />
      ))}
    </div>
  );
}

const Beer = ({ name, tagline, image_url }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={image_url} alt="Beer URL" />
    </div>
  );
};

// https://codesandbox.io/s/vibrant-albattani-mhcp8f?file=/src/App.js:0-1239