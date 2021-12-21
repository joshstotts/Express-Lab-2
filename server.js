const express = require('express');



const app = express();



app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    res.send(`Hello there ${req.params.name}`);
});




app.listen(3000, () => {
    console.log(`Express is listening on port 3000`);
});