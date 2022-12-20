const express = require("express");
const app = express();
app.use(express.json());

app.post("/average", (req, res) => {
  const avg = req.body.num;
  let sum = 0;
  let result = 0;
  const length = avg.length;

  avg.forEach((element) => {
    sum += element;
  });

  result = sum / length;

  res.json({
    Average: result,
  });
});

app.listen(4000, () => {
  console.log("Listening to port :4000");
});

// res.json({
//     average : function average(avg){
//         avg.forEach((element) => {

//             sum += element;
//             } )
//            return result = (sum / length)
//     }
// })

// });
