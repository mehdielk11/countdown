const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let countdowns = [];

app.post('/api/countdown', (req, res) => {
    const { title, date } = req.body;
    const eventDate = moment(date).valueOf();

    if (!title || isNaN(eventDate)) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const now = moment().valueOf();
    const timeRemaining = eventDate - now;

    if (timeRemaining < 0) {
        return res.status(400).json({ error: 'Please select a future date for your event.' });
    }

    countdowns.push({
        title,
        date: eventDate,
        createdAt: now
    });

    res.status(201).json({ success: true });
});

app.get('/api/countdowns', (req, res) => {
    res.json(countdowns);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
