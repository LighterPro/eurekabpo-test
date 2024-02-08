const express = require('express');
const { userExists } = require('./build/Release/check_user_winapi');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/check', (req, res) => {
    const userName = req.body.userName;
    const exist = userExists(userName);
    res.json({ message: exist ? "Пользователь есть" : "Пользователя нет" });
});

app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}/`);
    try {
        const open = (await import('open')).default;
        open(`http://localhost:${port}/`);
    } catch (error) {
        console.error('Failed to open browser:', error);
    }
});
