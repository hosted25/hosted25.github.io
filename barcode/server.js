const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());

app.post('/barcode/send-to-telegram', function(req, res) {
    const message = req.body.message;
    const botToken = '6342001311:AAHqewgJxaHFW8qzthyQLMnZa6wkYssZyUg';
    const chatId = '1942947519';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    axios.post(url)
        .then(response => {
            console.log("Message sent to Telegram bot");
            res.send("Success");
        })
        .catch(error => {
            console.log(error);
            res.send("Error");
        });
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
