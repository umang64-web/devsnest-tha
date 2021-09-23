     //   MIDDDLEWARES IN EXPRESS
         /* Middleware are the functions that execute before main to check whether everything
           is ok for the main file to execute*/

     // Middlewares are used so that we can make use of one functions everywhere we want*/ 

     // USE OF MIDDLEWARES 

        /* 1.Permission system 
           2. Authorization
           3. Time of Login */

     /* get call can be easily cached but post can not be cached
      so for security purpose we use post*/

const express = require('express');
const app = express();

const checkAdmin = (req , res , next)=>
{
    if(req.query.admin === 'true')
    {
        next()
    }
    else{
        res.status(400).send("should be admin");
    }
};

app.use(checkAdmin); // sequence matters of this statement

const sendRes=(req , res)=>
{
    res.status(200)
    res.json(req.query)
};

app.get('/' , sendRes);
app.get('/products' , sendRes);

/* If we want to use checkAdmin in every api then we have to 
call it in every field so to overcome this we can use app.use
 which will automatically call that function passed in app.use before every api calling */



app.listen(5000);