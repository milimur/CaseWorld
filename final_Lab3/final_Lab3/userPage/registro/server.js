const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(cors());

app.post('/submit', (req, res) => {
    const { email, dni, phone, password } = req.body;
    const data = { email, dni, phone, password };

    const dictstring = `[${JSON.stringify(data)}]`;

    const filePath = path.join(__dirname, 'thing.json');
    
    fs.writeFile(filePath, dictstring, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.status(200).json({ message: 'Data saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
