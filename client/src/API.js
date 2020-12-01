import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export const getRandomMeal = async () => {
  try {
    const randomMeal = await axios.get(
      baseUrl + '/get-random-meal'
		)

    return randomMeal
  } catch (error) {
    throw new Error(error)
  }
}
