const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo'); 
require('dotenv').config();

const app = express();
app.set('trust proxy', 1);

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Atlas Connected"))
    .catch(err => console.error("❌ Atlas Connection Error:", err));

app.use(session({
    name: 'medico_admin_session',
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: mongoURI,
        collectionName: 'sessions',
    }),
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24, 
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    }
}));

// ... rest of your routes ...
const apiRoutes = require('./routes/api');
const { adminRouter } = require('./routes/admin');
app.use('/api', apiRoutes);
app.use('/api/admin', adminRouter);

app.listen(5000, () => console.log(`🚀 Server running on port 5000`));