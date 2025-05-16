const notFound = (req, res, next) => {
    res.status(404)
    res.json ({
        error: "page not found",
        message: "Pagina non trovata"
    });
}

module.exports = notFound