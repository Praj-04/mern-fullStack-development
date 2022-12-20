const express = require("express");
const app = express();
app.use(express.json());


app.post("/sum", (req, res) => {
  const n = req.body.num;
  let result = 0;

  function sum(n) {
       for (let i = 1; i <= n; i++) {
      result = result + i;
    }
    return result;
  }

  res.json({
    sum: sum(n),
  });



  //   res.json({
  //     sum: () => {
  //         const n = req.body.num;
  //         let result = 0;
  //         console.log(n);
  //       for (let i = 1; i <= n; i++) {
  //         result = result + i;
  //       }
  //       return result;
  //     },
  //   });

  //    sum((n)=>{
  //       for(let i = 1; i <= n; i++) {
  //           result = result + i;
  //         }
  //         res.json({
  //           sum : {result},
  //                 });
  //   })

  //   sum(n);
  //   function sum(n){
  //       console.log(n);
  //       for(let i = 1; i <= n; i++) {
  //           result = result + i;
  //         }
  //     //   app.send(result);
  //     res.json({
  //         sum : {result},
  //               });
  // }
  // res.json({
  //     sum : `{result}`,
  //           });
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
