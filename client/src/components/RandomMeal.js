import { getRandomMeal } from "./../API";
import { useEffect, useState } from "react";

function RandomMeal() {
  const [data, setRandomMeal] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getRandomMeal()
      .then((result) => setRandomMeal(result.data.randomMeal))
      .catch((err) => console.log(err));
  };

  return (
    <div className="RandomMeal">
      <h1>Chef's meal of the day!</h1>
      <div className="wrapper">
        <div className="meal">{data.meal}</div>
        <div className="instructions">{data.instructions}</div>
        <img
          className="thumbnail"
          src={data.thumbnail}
          alt="meal-thumbnail"
        ></img>
      </div>
    </div>
  );
}

export default RandomMeal;
