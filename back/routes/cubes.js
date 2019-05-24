const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send("je suis dans /cubes")
})

router.get("/showcubes", (req, res) => {
  res.status(200).send("je suis dans /showcubes")
})

module.exports = router
