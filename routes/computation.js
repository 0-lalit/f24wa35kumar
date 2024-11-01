const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Get 'x' and 'y' from query parameters or generate defaults
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;
    let y = req.query.y ? parseFloat(req.query.y) : Math.random() * 10;

    // Compute results using all three functions
    const atan2Result = Math.atan2(y, x);
    const atanhResult = (x > -1 && x < 1) ? Math.atanh(x) : "undefined (x must be in range -1 < x < 1)";
    const cbrtResult = Math.cbrt(x);

    // Prepare the response with results on different lines
    const response = `Math.atan2 applied to (${y}, ${x}) is ${atan2Result}\n` +
                     `Math.atanh applied to ${x} is ${atanhResult}\n` +
                     `Math.cbrt applied to ${x} is ${cbrtResult}`;

    // Send the response with line breaks
    res.setHeader('Content-Type', 'text/plain'); // Ensure plain text response for line breaks
    res.send(response);
});

module.exports = router;
