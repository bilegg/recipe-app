import { getRandomMeal } from "./../API";
import { useEffect } from "react";

function RandomMeal() {
  useEffect(() => {
		async function fetchData() {
			const response = await getRandomMeal();
			
			console.log(response);
		}

    fetchData();
  }, []);

  return (
    <div className="RandomMeal">
      <h1>Chef's meal of the day!</h1>
    </div>
  );
}

export default RandomMeal;
