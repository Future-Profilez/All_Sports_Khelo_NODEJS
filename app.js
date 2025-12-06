const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const prisma = require("./lib/prisma.js")
const userRoutes = require("./routes/userRoutes.js")
const tournamentRoutes = require('./routes/tournamentRoutes.js')
const sportsRoutes = require('./routes/sportsRoutes.js')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ message: "Backend is running.." })
})

app.use('/api', userRoutes)
app.use('/api', tournamentRoutes)
app.use('/api', sportsRoutes)

// Create user
// app.post('/users', async (req, res) => {
//     try {
//         const { name, email } = req.body;
//         const user = await prisma.user.create({
//             data: { name, email },
//         });
//         res.status(201).json(user);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// });

// Get all users
// app.get('/users', async (req, res) => {
//     try {
//         const users = await prisma.user.findMany();
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})