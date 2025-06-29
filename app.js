const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/postRouter.js");
const notFound = require("./middlewares/notFound.js");
const errorsHandler = require("./middlewares/errorsHandler.js");
const cors = require("cors");
const corsConfig = {
  origin: "http://localhost:5173",
};

app.use(cors(corsConfig));
app.use(express.static("public")); // middleware assets statici

app.use(express.json()); // middleware body parser

app.get("/", (req, res) => {
  res.json({ message: "Server del mio blog" });
});

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});

app.use(errorsHandler); // middleware error 500

app.use(notFound); // middleware error 404
