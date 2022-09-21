import express from "express";
import { uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const cars = {};

app.post("localhost:3000/cars", (request, response) => {
  const { model, brand, year, color, plate } = request.body;

  cars.push({
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  });

  return response.status(201);
});

app.get("localhost:3000/", (response) => {
  response.sendStatus("Kenzie Cars");
});

app.listen("localhost:3000");
