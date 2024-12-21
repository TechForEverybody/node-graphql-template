import express from 'express'
import cors from 'cors'
import session from 'express-session'
import 'reflect-metadata'
import { API_Logger } from './middleware/APILogger'
import ExpressRouter from './routes'
import serverConfiguration from '../node.config'
import { expressMiddleware } from '@apollo/server/express4'
import { buildSchema } from 'type-graphql'
import resolvers from './graphql/resolvers'
import { ApolloServer } from '@apollo/server'
import AuthenticationChecker, { getAuthData } from './middleware/AuthChecker'

const App = express()

App.set('view engine', 'ejs')
App.use(
    cors({
        origin: '*',
        credentials: true,
    }),
    session({
        secret: serverConfiguration.secretKey,
        resave: false,
        saveUninitialized: true,
    }),
    express.json({ limit: '50mb' }),
    express.urlencoded({ limit: '50mb', extended: true }),
    express.static('Public')
)
App.use(API_Logger, ExpressRouter)

async function startServer() {
    const schema = await buildSchema({
        resolvers: resolvers,
        authChecker: AuthenticationChecker,
        authMode: 'error',
        validate: true,
        emitSchemaFile: {
            path: __dirname + '/graphql/schema.graphql',
        },
    })
    const server = new ApolloServer({
        schema,
    })
    await server.start()
    App.use(
        '/graphql',
        expressMiddleware(server, {
            context: async ({ req: request, res: response }) => {
                console.log('context req')
                const user = await getAuthData()
                return { request, response, user }
            },
        })
    )
    App.listen(serverConfiguration.serverPort, () => {
        console.log(
            `Server listening at http://${serverConfiguration.serverHost}:${serverConfiguration.serverPort}`
        )
    })
}

export default startServer
