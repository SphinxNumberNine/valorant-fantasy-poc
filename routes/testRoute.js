module.exports = app => {
    app.get("/test", (req, res) => {
        return res.status(200).send("TESTING");
    })
}