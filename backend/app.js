import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import morgan from 'morgan';


dotenv.config();
const app = express();
app.use(morgan("tiny"));
// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log('mongodb connected !')
// }).catch((err) => {
//   console.log('mongodb connect error !', err)
// })

app.get('/', (req, res) => {
  // res.send('test');
  // let test = "hi"
  // res.status(200).json({test:test})
})


app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}!`)
})