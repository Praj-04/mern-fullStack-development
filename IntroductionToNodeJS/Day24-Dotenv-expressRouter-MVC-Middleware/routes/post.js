const router = require('express').Router();


router.get('/',(req,res)=>{
    res.json({
      id :123,
      name:'prajna',
      img :'praj@gmail.com'
    })
  })


  router.get('/all',(req,res)=>{
    res.json({
      data : [
        {
            title :'hey'
        },
        {
            title :'hello'
        }
      ]})
    
  })


//   router.post('/',(req,res)=>{
    
//   })

module.exports = router;