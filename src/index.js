import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.status(200).send('Welcome to this application');
})

app.listen(3000, ()=>{
    console.log("Server is running in http://localhost:3333")
})