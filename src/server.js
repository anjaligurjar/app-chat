const express = require('express');

const UserRouter=require('./api/user/user.route.js')
const app =express();
const PORT=process.env.PORT || 3000
const http=require('http').createServer(app)
const io=require('socket.io')(http)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))
app.use(UserRouter)
app.get('/',(req,res)=>{
    res.sendFile(__dirname ,+ './index.html')

})
http.listen(PORT,()=>{
    console.log(`server is connected, ${PORT}`)
})
io.on('connection',()=>{
    console.log('user is connected')
})
