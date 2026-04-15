const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/UserRoutes.js');
const authroutes = require('./router/UserAuthRoutes.js');
const adminRoutes = require('./router/adminRoutes.js');
const feedbackRoutes = require('./router/feedbackRoutes.js'); 
const paymentRoutes = require('./router/paymentRoutes.js'); 
const connect = require('./db/connection.js');
const dotenv = require('dotenv');
const authMiddleware = require('./middleware/authMiddleware.js');


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.get('/', (req, res) => {
    res.status(201).json("Home get request")
});

app.use('/api/auth', authroutes);
app.use('/api/payment',authMiddleware,paymentRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/admin', (req, res, next) => {
    if (req.path === '/login') {
        next(); 
    } else {
        authMiddleware(req, res, next);
    }
}, adminRoutes);

app.use('/api', (req, res, next) => {
    if (req.path === '/searchFlight' || req.path==='/searchAllFlights') {
        next(); 
    } else {
        authMiddleware(req, res, next);
    }
}, router);


connect(process.env.CONNECTION_STRING).then(() => {
    try {
        app.listen(port, () => {
            console.log(`server is connected to http://localhost:${port} `);
        })
    } catch (error) {
        console.log("cant connect to server");
    }
}).catch(error => {
    console.log(error);
    console.log("invalid db connection");
});
