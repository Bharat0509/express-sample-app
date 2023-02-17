import mongoose, { Mongoose } from 'mongoose'

const connectToDb = () => {
  mongoose.set('strictQuery', false)
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log('MongoDb Servers Connected!!')
  ).catch(
    (err) => {
      console.log(err)
    }
  )
}
export default connectToDb
