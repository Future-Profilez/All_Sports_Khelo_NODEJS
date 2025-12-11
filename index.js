const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const prisma = require("./lib/prisma.js")
const tournamentRoutes = require('./routes/tournamentRoutes.js')
const sportsRoutes = require('./routes/sportsRoutes.js')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ message: "Backend is running..." })
})


app.use('/api', tournamentRoutes)
app.use('/api', sportsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})