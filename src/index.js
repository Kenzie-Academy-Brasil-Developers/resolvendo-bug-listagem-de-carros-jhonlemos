import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());
app.listen(3000);

const cars = [];

app.post("/cars", (request, response) => {
  const car = {
    ...request.body,
    id: uuidv4(),
  };

  if (cars.find((el) => el.plate === car.plate))
    return response.status(400).json("plate already being used");

  cars.push(car);
  return response.status(201).json(car);
});

app.get("/cars", (request, response) => {
  response.status(200).json(cars);
});
