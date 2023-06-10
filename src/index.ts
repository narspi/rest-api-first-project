import express from "express";
import cors from "cors";
import compression from "compression";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import { query } from "./db";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(bodyparser.json());

app.get("/", (request, response) => {
  console.log(request.body);
  const animal = "alligator ";

  response.send(animal.repeat(10));
});

app.get("/create", (request, response) => {
  console.log("create");
  query(`
CREATE TABLE customers
(
    Id SERIAL PRIMARY KEY,
    FirstName CHARACTER VARYING(30),
    LastName CHARACTER VARYING(30),
    Email CHARACTER VARYING(30),
    Age INTEGER
)`);
});

app.listen(port, () => console.log(`Running on port ${port}`));
