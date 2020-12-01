const _ = require("lodash");
const axios = require("axios");

const getRandomMeal = async (req, res) => {
    const request = axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    const randomMeal = await request
        .then((result) => {
            const requiredKeys = [
                "strMeal",
                "strCategory",
                "strInstructions",
                "strMealThumb",
            ];

            const mealData = _.pickBy(
                result.data.meals[0],
                function (value, key) {
                    return _.includes(requiredKeys, key);
                }
            );

            function setMealValues(mealData) {
                let meal = {
                    meal: "",
                    category: "",
                    instructions: "",
                    thumbnail: "",
                };

                meal.meal = mealData.strMeal;
                meal.category = mealData.strCategory;
                meal.instructions = mealData.strInstructions;
                meal.thumbnail = mealData.strMealThumb;

                return meal;
            }

            return setMealValues(mealData);
        })
        .then((json) => {
            return json;
        })
        .catch((error) => console.error(error));

    res.status(200).json({ randomMeal });
};

module.exports.getRandomMeal = getRandomMeal;
