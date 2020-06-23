const express = require('express');
const router = express.Router();

//Login Page Routes
router.get('/login', (req,res) => res.render('login')); //login.ejs dosyası renderlenir ve belirtilen urlde gösterilir

//Register Page Routes
router.get('/register', (req,res) => res.render('register'));  //register.ejs dosyası renderlenir ve belirtilen urlde gösterilir

//Register Handle
router.post('/register', (req, res) => {
    console.log("req.body :::: ",req.body);  //req.body:: register.ejs 'den  post edilen form inputlarını obje halinde gösterir
    const {name, email, password, password2} = req.body;
    let errors= [];

    //Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields'});   //not {} obje belirtir array içine obje push ediliyor bu durumda
    }
    
    //Check password match
    if(password != password2){
        errors.push({ msg: ' Password do no match'});
    }

    //Check pass length
    if(password.length < 6){
        errors.push({ msg: "Password should be at least 6 char"});
    } 

    //if there is error
    if(errors.length > 0){
        res.render('register', {  //belirtilen obje register.ejs'de renderlenir 
            errors,
            name,
            email,
            password,
            password2
        });
    } else{
        res.send('pass');
    }
});

module.exports = router;