import  Express  from "express";

const app = Express();

app.get('/',(req,res) => {
    res.send("server is ready");
});


app.get("/api/jokes",(req,res) => {
    const jokes =[ 
        {
            id:1,
            tittle:"another jokes",
            content:"this is another jokes"
        },
        {
            id:2,
            tittle:"another jokes 1",
            content:"this is second jokes"
        },
        {
            id:3,
            tittle:"another jokes 2",
            content:"this is third jokes"
        },
        {
            id:4,
            tittle:"another jokes 3",
            content:"this is fourth jokes"
        },


    ];
    res.send(jokes);
});

const port = process.env.PORT  || 3001 ;

app.listen(port,(req,res)=>{
           console.log(`server is runnig on the port ${port}`);
})
