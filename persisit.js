const express = require('express');
const app = express();
const PORT = 3000;

// Sample tweets (replace with AI integration later)
const tweets = [
    "AI is transforming the way we think!",
    "Automated tweets are the future of social media.",
    "Vestex is powered by cutting-edge AI technology."
];

app.get('/api/tweets', (req, res) => {
    res.json({ tweets });
});

app.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT});
});