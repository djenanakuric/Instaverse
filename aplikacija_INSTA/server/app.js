import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app =  express();

app.use(bodyParser.json( {limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "32mb", extended: true}));
app.use(cors());

const MONGO_URI = "mongodb://instaverse:decembar@ac-rf2hpns-shard-00-00.xwpbhne.mongodb.net:27017,ac-rf2hpns-shard-00-01.xwpbhne.mongodb.net:27017,ac-rf2hpns-shard-00-02.xwpbhne.mongodb.net:27017/test?replicaSet=atlas-fqgn6u-shard-0&ssl=true&authSource=admin";

const PORT = process.env.PORT || 5001;

const connectDB = async () => {
    try {
        mongoose.connect(MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    } catch (err) {
        console.error("Connection to MongoDB failed", err.message)
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("Conection to database has been established successfully"));
mongoose.connection.on("open", (err) => console.log(err));