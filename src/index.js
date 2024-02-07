import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

let users = []
let messages = []

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

    res.status(201).json({
        sucess: true,
        message: ' User registered successfully'
    })
    
}) 

//--------- LOGIN -------- 

app.post('/login',(req,res)=>{
    const{email, password} = req.body 

    const userVerify = users.find(user => user.email === email) 

    if(!userVerify){
        return res.status(400).json({
            message: 'This email does not exist in database'
        })
    }

    res.status(200).json({
        message: "Welcome! You have successfully in tour login",
        email
    })

})

//--------- GET USERS -------- 

app.get('/users',(req,res)=>{
    res.status(200).json({
        sucess: true,
        users
    })
})

//---------- CREATE MASSAGE ----- 

app.post('/massage',(req,res)=>{
    const {email,title,description} = req.body
    
    const userVerify = users.find(user => user.email === email) 

    if(!userVerify){
        res.status(404).json({
            sucess: false,
            message: "Please enter a valid email to send a message"
        })
    }

    const newMesage ={
        id: nextMessageId ,
        title: title,
        description: description
    }

    messages.push(newMesage)
    
    res.status(201).json({
        sucess: true,
        message: ' Message registered successfully'
    })


    nextMessageId++
})

//------- VERIFY----

app.listen(3333, ()=>{
    console.log("Server is running in http://localhost:3333")
})