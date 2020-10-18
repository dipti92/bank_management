const express = require('express')
const app=express()
const mysql = require('mysql')
const bodyparser=require('body-parser')
const corrs =require('cors')

//UPDATE `bankdb`.`customers` SET `accnum` = '1112234510' WHERE (`id` = '10');
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'bankdb'
});

app.use(corrs());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/api/customers",(req,res) => {
    const sqlselect="SELECT * FROM customers";
    db.query(sqlselect,(err,result) => {
        res.send(result);
    })
});

    // app.put('/api/transact',(req,res) => {
    //     const fromid=req.body.fromid;
    //     const frombal=req.body.frombal;
    //     const inputval=req.body.inputval;
    //     const toid=req.body.toid;
    //     const tobal=req.body.tobal;
    //     const fromfinal=frombal-inputval;
    //     const tofinal=tobal+inputval;
        
    //     const sqlupdate = `UPDATE customers SET current_balance = ? WHERE (id = ?);`
    //    db.query(sqlupdate,[fromfinal,fromid],(err,result) => {
    //        if(err){
    //         return console.log(err);
    //        }
    //        else {
    //           return c(result);}
    // })
    // })

    app.put('/api/transact',(req,res) => {
        const fromid=req.body.fromid;
        const frombal=req.body.frombal;
        const inputval= parseFloat(req.body.inputval);
        const toid=req.body.toid;
        const tobal=req.body.tobal;
        const fromfinal=frombal-inputval;
        const tofinal= tobal+ inputval;
       // console.log(typeof(inputval))
//         //UPDATE Customers  
// SET current_balance = CASE  
// WHEN id=1 THEN 24666  
// WHEN id=2 THEN 3000  
// else current_balance
// END ;
        //const sqlupdate = `UPDATE customers SET current_balance = ? WHERE (id = ?);`
        const sqlupdate=` UPDATE Customers  SET current_balance = CASE  
                            WHEN id=? THEN ? 
                            WHEN id=? THEN ?
                            else current_balance  END ;`
       db.query(sqlupdate,[fromid,fromfinal,toid,tofinal],(err,result) => {
           if(err){
            return console.log(err);
           }
           else {
              return res.send(result);}
    })
    })




    app.listen(3001, ()=> {
        console.log('Running on port 3001')
    });
    