const { model, Schema } = require("mongoose");

const mealSchema = new Schema(
	{
		meal: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		}
	},
	{ timestamps: true }
)

module.exports = model("Meal", mealSchema)