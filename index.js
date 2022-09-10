require("dotenv").config();
const express = require("express");
const app = new express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const productsRoutes = require("./routes/productsRoutes");
const productsDetailsRoutes = require("./routes/productsDetailsRoutes");

app.use("/products", productsRoutes);
app.use("/details", productsDetailsRoutes);

app.listen(PORT, (error) =>
    error ? console.error(error) : console.info(`listening on ${PORT}`)
);
