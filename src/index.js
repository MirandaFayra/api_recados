import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

let users = []
let menssage = []

let nextUserId = 1 

let nextMessageId = 1 

//------- TEST----

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to this application');
})

//------- SIGNUP----

app.post('/signup',(req,res)=>{
    const {name, email , password} = req.body

    
    if(!name){
        res.status(400).json({
            message: 'Please verify if you pass a valid name'
        })
    }

    if(!email){
        res.status(400).json({
            message: 'Please verify if you pass a valid  email adress'
        })
    }

    if(!password){
        res.status(400).json({
            message: 'Please verify if you pass a valid  password'
        })
    }
 
    const newUser = {
        id: nextUserId, 
        name: name,
        email: email,
        password: password
    }

    users.push(newUser)

    nextUserId ++

    console.log(newUser)

    res.status(201).json({
        sucess: true,
        message: ' User registered successfully'
    })
    
}) 

//------- VERIFY----

app.listen(3333, ()=>{
    console.log("Server is running in http://localhost:3333")
})