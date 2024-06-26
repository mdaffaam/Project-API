import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

//(async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

//app.use(cors({
//credentials: true,
    //origin: 'http://localhost:3000' //alamat frontend
//}));
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);

// store.sync();

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server up and running on port ${PORT}...`);
});
