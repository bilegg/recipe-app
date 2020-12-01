const { Router } = require("express");
const { getRandomMeal } = require("../controllers/meals/getRandomMeal");

const router = Router();

router.get("/get-random-meal", getRandomMeal);

/* router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo) */

module.exports = router