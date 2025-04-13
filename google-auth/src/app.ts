import express from 'express';
import AuthRoute from './routes/auth.route';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json())

app.get("/", function(req, res) {
  res.send("Hello World");
})


app.use("/auth", AuthRoute)


export default app;