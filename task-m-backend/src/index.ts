import * as express from 'express'
import * as Cors from 'cors'
import connectDB from './config/db'; 

const PORT = 3000

const app = express()

app.use(Cors({origin: true}))

// for parsing application/json
app.use(express.json())

// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Middleware
const taskRoutes = require('./routes/taskRoutes.js')
app.use("/", taskRoutes)

// In case of Invalid URL
app.all('*', (req, res) => {
	res.status(404).send("Invalid URL Requested " + req.url )
})

// database connection
connectDB();

// start the server
app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`)
})
