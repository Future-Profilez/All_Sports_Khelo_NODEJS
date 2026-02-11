const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const prisma = require('./lib/prisma'); // Import prisma client
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

// Database connection check
async function checkDatabaseConnection() {
    try {
        await prisma.$connect();
        console.log('✅ [Prisma] Database connected successfully');
    } catch (error) {
        console.error('❌ [Prisma] Database connection failed:', error.message);
        // Optional: process.exit(1) if you want to fail hard on DB error
    }
}

checkDatabaseConnection();
app.use('/api/tournament', tournamentRoutes)
app.use('/api', sportsRoutes)
app.use('/api/academies',academyRoutes)
app.use('/api',addressRoutes);
app.use('/api', authRoutes)
app.use("/preview", previewRoutes);

const date = new Date();
app.get('/', (req, res) => {
    res.json({ message: "Backend is running... via ... ci cd pipeline", date: date.toISOString() });
})
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})