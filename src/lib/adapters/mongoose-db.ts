import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
    throw new Error('No se ha definido la variable de entorno MONGODB_URI')
}

export const connect = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI, {})
        if (connection.readyState === 1) {
            console.log('Connected to mongo')
            return Promise.resolve(true)
        }
        console.log('Connected to mongo')
    } catch (error) {
        return Promise.reject(false)
    }
}