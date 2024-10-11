const express = require('express');
const cors = require('cors');
const { query, addDoc } = require('./config');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
    try {
        const data = req.body;
        await addDoc(query, data);
        res.json({ message: "success" });
    } catch (error) {
        console.error("Error writing to Firestore: ", error);
        res.status(500).json({ message: "failure", error: error.message });
    }
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});