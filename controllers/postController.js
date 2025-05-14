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
  res.json("Creazione di un nuovo post");
}

function update(req, res) {
  const id = req.params.id;
  res.json("Sostituzione del post " + id);
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
