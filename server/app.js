import express from 'express';


const app = express();


app.use('/', (req,res) =>{
    res.send("the server is working")
    res.end();
});


const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`App is listening on ${port}...`);
})