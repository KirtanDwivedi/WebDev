import fs from 'fs';

export const getUser = (req, res) => {
    res.send(`User ID: ${req.params.id} and Name: ${req.params.name}`);
};

export const search = (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Search query: ${name} and ${age}`);
};

export const userLogin = (req, res) => {
    const { username, password } = req.body;

    try {
        // Read the data.json file
        const rawData = fs.readFileSync('./data.json');
        const userData = JSON.parse(rawData);

        // Check if the credentials match
        if (username === userData.username && Number(password) === userData.password) {
            res.json({ message: `User logged in successfully! Welcome ${username}` });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error reading data.json:", error);
        res.status(500).json({ message: "Error reading login data" });
    }
};