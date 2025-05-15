const posts = require("../data/posts");

function index(req, res) {
  const { tag } = req.query;
  let filteredPosts = posts;

  if (tag) {
    filteredPosts = posts.filter(post => 
      post.tags && post.tags.includes(tag)
    );
  }

  res.json({
    message: tag ? `Posts filtrati per tag '${tag}'` : "Lettura di tutti i post",
    posts: filteredPosts,
  });
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post non trovato",
      message: `Nessun post con ID ${id} trovato`,
    });
  }

  res.json({
    message: `Dettaglio del post ${id}`,
    data: post,
  });
}

function store(req, res) {
      console.log(req.body);
  const newId = posts[posts.length - 1].id + 1;
  const newPost = {
    id: newId,
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    tags: req.body.tags
  }
posts.push(newPost);
console.log(posts);
res.status(201);
  res.json(newPost);

}

function update(req, res) {
// recuperiamo l'id dall' URL e trasformiamolo in numero
const id = parseInt(req.params.id)
// cerchiamo il post tramite id
const post = posts.find(post => post.id === id);
// Piccolo controllo
if (!post) {
res.status(404);
return res.json({
error: "Not Found",
message: "Post non trovato"
})
}
// Aggiorniamo IL POST
post.title = req.body.title;
post.image = req.body.image;
post.tags = req.body.tags;
// Controlliamo i post
console.log(posts)
// Restituiamo il post appena aggiornato
res.json(post);
}

function destroy(req, res) {
  const id = req.params.id;
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    console.log(posts);
    res.sendStatus(204);
  } 
  else {
    return res.status(404).json({
      error: "Post non trovato",
      message: `Nessun post con ID ${id} trovato`,
    });
  }
}

module.exports = { index, show, store, update, destroy };
