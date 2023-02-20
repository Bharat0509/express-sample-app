import mongoose, { Mongoose } from 'mongoose'

const connectToDb = () => {
  mongoose.set('strictQuery', true)
  mongoose.connect('mongodb+srv://bharat:bharat@cluster0.mfnma.mongodb.net/Ecommerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log('MongoDb Servers Connected!!')
  ).catch(
    (err) => {
      console.log(err)
    }
  )
}
export default connectToDb
