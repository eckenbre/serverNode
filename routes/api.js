var express = require('express')
, router = express.Router()








router.post('/login', function(req, res) {
console.log("/login invocado -> request :"+JSON.stringify(req.body))
var email = req.body.email

console.log(email)

if(email === "eckenbre@gmail.com" )
    {
        var response = { "nombre" : "Alejandro", "apellido": "von Eckenbrecher", "email":"eckenbre@gmail.com", "twitter": "@eckenbre" };
        res.send(response);


    }
    else
    {
        res.status(401).json({
        message: '{ "Status" : "Auth Error" }'
    });
    }
    
   
           
  

})



module.exports = router