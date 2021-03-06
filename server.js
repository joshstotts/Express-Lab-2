const express = require('express');



const app = express();



app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    res.send(`Hello there ${req.params.name}`);
});


// does not work if tip percentage is greater than total
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params);
    let tip = Math.abs(req.params.tipPercentage / req.params.total) * 100;
    res.send(`${tip}`);
});


var phrase = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good", 
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later", 
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again", 
    "Don't count on it", 
    "My reply is no", 
    "My sources say no", 
    "Outlook not so good", 
    "Very doubtful"
];

let answer = phrase[Math.floor(Math.random() * phrase.length)]
console.log(answer);

app.get('/magic/:question', (req, res) => {
    console.log(req.params);
    res.send(`<h1>${req.params.question}:</h1> ${answer}`);
});


app.listen(3000, () => {
    console.log(`Express is listening on port 3000`);
});
