const jwt= require('jsonwebtoken')

const generateToken =(id) =>{
    return jwt.sign({id},'jhjhjh',{
        expiresIn: "30d",
    });

};

module.exports=generateToken;