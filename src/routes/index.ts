import express from 'express'

const ExpressRouter = express.Router()

ExpressRouter.get('/', (_, res) => {
    res.render('index')
})

export default ExpressRouter
