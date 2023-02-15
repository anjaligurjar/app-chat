const jwt = require('jsonwebtoken')
exports.verifyToken=(req,res,next)=>{
    const auth =req.auth
    console.log(auth)
    if(!auth.scheme==bearer){
       return  res.send("invalie shceme")
    }
    jwt.verifyToken( auth.token, SECRETE,(error,data)=>{
if(error){
    return res.send("access is not  verify ")
    
}
req.auth.user=data.user

    })
exports.verify(user,cb)=
    jwt.sign({user},SECRETE,({expireIn:'300s'},()=>{
        

    }))
exports.extract=( res,res,next)=>{
    const bear=req.Authurization['']
        const auth=bear.split(" ")
    req.auth={
        scheme:auth[0],
        token:auth[1]
        
    }
    if(!req.auth.token){
        res.send('access denied')
    }
    }

}

