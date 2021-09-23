const express = require("express");
const app = express();

app.get('/' , (req , res)=>
{
  res.status(200).send("Hello");
});

//http://localhost:5000/products?limit=50&q=something something
//?limit=50&q=something something -> This is known as query

app.get('/products' , (req , res)=>
{
  res.send(req.query);
  //res.send(req.query.q);       
});

//http://localhost:5000/abcd

app.get('/ab?cd' , (req , res)=>    //ab?cd will give choice of writing b in url.
{
  res.send('abcd');
});

app.listen(5000);


app.get('/ab+cd' , (req , res)=>    //ab+cd -> b can come any number of times in url.
{
  res.send('abcd');
});

app.get('/ab*cd' , (req , res)=>    //ab*cd -> anything can come between ab and cd in url.
{
  res.send('abcd');
});

app.get('/ab(cd)?e' , (req , res)=>    //ab(cd)?e -> cd is optional in url.
{
  res.send('abcd');
});

app.get(/a/ , (req , res)=>    //url should start with a
{
  res.send('abcd');
});

app.get(/.*fly$/ , (req , res)=>    //ex- url -> http://localhost:5000/dragonfly
{
  res.send('abcd');
});

app.get('/user/:userId/books/:bookId' , (req , res)=>    //http://localhost:5000/user/1/books/2
{                                                        // when we want this  type of url 
  res.send(req.params);                                  // and dynamic id's.dynamic values we get in re.params
});

app.get(/a/ , (req , res)=>              // http://localhost/user/1/books/2?text=hello
{                                        //text=hello we will get in req.query/
  res.send(req.query);
});

app.listen(5000);
/* 
1.In backend-> security , performance and edge cases should be handled

2. CRUD -> POST, GET, PUT, DELETE
3. res={sendStatus:()=>null , send:()=>return}
4. what is pipelining => writing above two statements as a single statements.
           example => res.status(200).send("hello");*/