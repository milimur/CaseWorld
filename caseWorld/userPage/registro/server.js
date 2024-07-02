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
    const newData = { email, dni, phone, password };

    const filePath = path.join(__dirname, 'thing.json');

    // Read the current content of the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        let existingData = [];

        // If the file is not empty, parse its content
        if (data) {
            try {
                existingData = JSON.parse(data);
            } catch (err) {
                console.error('Error parsing JSON', err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }
        }

        // Check if the email already exists
        const emailExists = existingData.some(user => user.email === email);
        if (emailExists) {
            // If the email exists, respond with an error and do not proceed further
            res.status(400).json({ message: 'Email already exists' });
            return;
        }

        // Add the new data to the existing data
        existingData.push(newData);

        // Write the file with the updated data
        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                // Respond with a success message if the data was saved successfully
                res.status(200).json({ message: 'Data saved successfully' });
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});