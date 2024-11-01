const express = require('express');
const router = express.Router();

router.get('/computation', (req, res) => {
    // Get 'x' from query parameter or generate a random number
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;
    let result, response;

    // Apply different Math functions based on conditions
    if (x >= 0 && req.query.y) {
        // If 'x' is positive and 'y' is provided, use Math.atan2()
        const y = parseFloat(req.query.y);
        result = Math.atan2(y, x);
        response = `Math.atan2 applied to (${y}, ${x}) is ${result}`;
    } else if (x > -1 && x < 1) {
        // If 'x' is between -1 and 1, use Math.atanh()
        result = Math.atanh(x);
        response = `Math.atanh applied to ${x} is ${result}`;
    } else {
        // Otherwise, apply Math.cbrt() (cube root)
        result = Math.cbrt(x);
        response = `Math.cbrt applied to ${x} is ${result}`;
    }

    // Send the response
    res.send(response);
});

module.exports = router;
