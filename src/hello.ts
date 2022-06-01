import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/bye", (req, res) => {
  res.send("Bye!");
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export = app;
