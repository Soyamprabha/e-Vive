import express from "express";
import bcrypt from "bcrypt";

//init server

const app = express();

//middlewares
app.use(express.static("public"));
app.use(express.json()) // enables form sharing

//routes
//home route
app.get('/',(req, res) => {
    res.sendFile("index.html",{root:"public"})
})

//sign up
app.get('/signup',(req, res) => {
    res.sendFile("signup.html", {root:"public"})
})

app.post('signup', (req, res) => {
    const { name, email, password } = req.body;

    //form validation
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

//seller route
app.get('/seller', (res,res)  => {
res.sendFile('seller.html', {root : "public"})
} )
