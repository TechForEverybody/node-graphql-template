import express from 'express';
import { ROUTES } from './routes';



const ExpressRouter = express.Router();

ExpressRouter.get('/', (req, res) => {
    res.render('index');
});



export default ExpressRouter;