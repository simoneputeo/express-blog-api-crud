const express = require('express')
const app = express()
const port = 3000
const postRouter = require("./routers/postRouter.js")
const postController = require("./controllers/postController.js")

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`)
})

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.json({message: 'Server del mio blog'})
});


