const express = require("express"); // Importing the Express module
const router = express.Router(); // Router module creation
const Concert = require("../models/Concert"); // Require the concerts model

/* GET concerts */
router.get("/:city", async (req, res, next) => {
  const city = req.params.city;
  const concerts = await Concert.findOne({ city: city });

  // JSON response to client
  return res.status(200).json({
    statusCode: 200,
    message: "Fetched concerts",
    data: { concerts },
  });
});

module.exports = router;
