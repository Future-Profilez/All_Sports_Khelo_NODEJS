const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const tournamentRoutes = require('./routes/tournamentRoutes.js')
const sportsRoutes = require('./routes/sportsRoutes.js');
const academyRoutes = require('./routes/academyRoutes.js');
const addressRoutes = require('./routes/addressRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const previewRoutes = require('./routes/previewRoutes.js');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/uploads', express.static('public/uploads'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/tournament', tournamentRoutes)
app.use('/api', sportsRoutes)
app.use('/api/academies',academyRoutes)
app.use('/api',addressRoutes);


app.use('/api', authRoutes)
app.use("/preview", previewRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Backend is running..." })
})
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})