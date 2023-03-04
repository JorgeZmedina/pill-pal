const express = require("express");
const interactionController = require("../controllers/interactionController");
//linking and pulling stuff for drug interactions
const router = express.Router();

router.get("/interaction/:drug1/:drug2", interactionController.getInteraction);

module.exports = router;
