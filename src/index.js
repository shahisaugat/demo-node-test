const express = require("express");
const app = express();

app.use(express.json());

const users = [
    {
        id: 1,
        name: "Saugat Shahi"
    }, 
    {
        id: 2,
        name: "Sanjog Koirala"
    }
]

app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" , uptime: process.uptime});
});

app.get('/users', (req, res) => {
    res.json(users);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});