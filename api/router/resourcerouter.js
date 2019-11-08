const express = require("express");

const Resources = require("../helper/resourcemodule");

const router = express.Router();

/* ******************************************************************* */

// MVP Endpoints

// GET /api/resources endpoint for Retrieving a list of resources - TESTED
router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get resources" });
    });
});

// POST /api/resources endpoint for Adding resources - TESTED
router.post("/", (req, res) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

/* ******************************************************************* */

module.exports = router;
