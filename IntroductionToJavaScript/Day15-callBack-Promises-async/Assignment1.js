async function getOrderInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("🍞");
      }, 2000);
    });
  }
  
  async function checkIfAvailable(order) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const available = true;
        if (available) {
          resolve( `${order} ✔`);
        } else {
          reject("❌");
        }
      }, 2000);
    });
  }
  
  async function placeOrder(available) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(`order placed ${available}`)
      },2000)
    });
  }
  
  
  async function shipped(){
    try {
      const order= await getOrderInfo();
      const available = await checkIfAvailable(order);
      const success = await placeOrder(available);
      console.log('ready to ship :',success)
      return success
    }catch(e){
      console.log(e)
    }
    
  }
  
  shipped().then((success)=>{
  console.log(success)
  }).catch(e=>{
    console.log(e)
  })