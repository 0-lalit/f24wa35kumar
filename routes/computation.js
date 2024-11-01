const express = require('express');
const router = express.Router();

router.get('/computation', (req, res) => {
    // Check for a query parameter `x`; if it exists, use it, otherwise generate a random number
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;

    // Apply Math.ceil() based on your last ID digit (5)
    let y = Math.ceil(x);

    // Prepare the response string
    const response = `Math.ceil applied to ${x} is ${y}`;

    // Send the response
    res.send(response);
});

module.exports = router;
