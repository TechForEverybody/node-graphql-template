import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

const serverConfiguration = {
    serverPort: parseInt(process.env.PORT || '7000') || 7000,
    serverHost: process.env.HOST || '127.0.0.1',
    secretKey: process.env.SECRET_KEY || 'Shivkumar Chauhan',
    databaseUrl: process.env.DATABASE_URL || '',
}

export default serverConfiguration
