import express from 'express';
import AuthRoute from './routes/auth.route';
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
})


app.use("/auth", AuthRoute)


export default app;