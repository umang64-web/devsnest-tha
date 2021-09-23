// SENDING STATIC FILES
const express = require('express');
const app = express();
const path = require('path');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use('/' , (req , res)=>
{
  // res.sendFile(path.join(__dirname , "public/Hello.txt"),'test.txt')
   //res.sendFile(path.join(__dirname , "public/text.json"))
   // res.download(path.join(__dirname , "public/image.jpg"),"download.jpg")
   //  res.download(path.join(__dirname , "public/text.json"))

   res.render('index',{title:"Express"})
  
});

app.listen(5000);