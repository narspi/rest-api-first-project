import express from 'express';
import dotenv from "dotenv";
import bodyparser from "body-parser";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  console.log(request.url)
  console.log(request.body)
  response.send('Hello world!');
});
app.listen(port, () => console.log(`Running on port ${port}`));