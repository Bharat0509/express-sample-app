import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({path: './backend/config/config.env'})

const connectToDb = () => {
  if (!process.env.MONGO_URI) {
    throw new Error('Auth MONGO_URI is not defined..')
  }

  mongoose.set('strictQuery', true)
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log('MongoDb Servers Connected!!')
  ).catch(
    (err) => {
      console.log(err)
    }
  )
}
export default connectToDb
