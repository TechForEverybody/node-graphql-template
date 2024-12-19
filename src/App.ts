import express from 'express';
import cors from 'cors';
import session from "express-session";
import { serverConfiguration } from '../node.config';
import { API_Logger } from './middleware/APILogger';
import Router from './routes';
import ExpressRouter from './routes';

const App = express();
App.use(cors())


App.use(
    session({
        secret: serverConfiguration.secretKey,
        resave: false,
        saveUninitialized: true
    })
);



App.use(express.json({ limit: '50mb' }));
App.use(express.urlencoded({ limit: '50mb' }));

App.use(API_Logger, ExpressRouter)
App.use(express.static('Public'))

App.set("view engine", "ejs");


export default App