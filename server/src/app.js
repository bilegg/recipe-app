const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
("use strict");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 4000;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    )
    .catch((error) => {
        throw error;
    });

