const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send("je suis dans /login")
})

router.get("/register", (req, res) => {
  res.status(200).send("je suis dans /login/register")
})

module.exports = router
