// callback

// function letsCook(callback) {
//   setTimeout(() => {
//     console.log("cooking pasta");
//     const pasta = "🍜";
//     callback(pasta);
//   }, 2000);
// }

// letsCook((pasta) => {
//   console.log(`the pasta is ready ${pasta}`);
// });

//Promise==> function returns a promise..  .then on promise returns fulfilled state. .catch will return error

// function cookPizza(){
//   return new Promise(function(res,rej)  {
// setTimeout(()=>{
//   // const available =true;
//   const available =false;
//   if(available){
//     const pizza = '🍕'
//     res(pizza)
//   }else{
//     rej('🥚')
//   }

// },2000)
//   })
// }

// const readyPromise = cookPizza();

// readyPromise.then((pizza)=>{
//   console.log(`${pizza} is ready`)
// }).catch((rej)=>{
//   console.log(`pizza not ready ${rej}`)
// })

//Async await -> Promise  ===> async await makes code from asynchonous to synchronous
//  function getCheese() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("cheese 🧀");
//     }, 1000);
//   });
// }

//  function makeDough(cheese) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${cheese} dough 🥚`);
//     }, 2000);
//   });
// }

//  function makePizza(dough) {
//   return new Promise((resolve, response) => {
//     setTimeout(() => {
//       resolve(`${dough} pizza 🍕`);
//     },3000);
//   });
// }

// async function orderPizza() {
//   try{
//     const cheese = await getCheese(); //next line of code executed only after this function returns result. async await make code synchronous from asynchronous
//     console.log("we have",cheese);
//     const dough = await makeDough(cheese);
//     console.log("we have",dough );
//     const pizza = await makePizza(dough);
//     console.log(" ready",pizza);
//     return pizza;
//   }
//   catch(e){
//     console.log(e);
//   }

// }

// orderPizza().then((pizza)=>{
//   console.log(pizza);
// }).catch(e=>{
//   console.log(e);
// });

async function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = "Prajna";
      resolve(name);
    }, 1000);
  });
}

async function checkIfAlreadyPresent(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const namehere = "Prajna";
      if (namehere != name) {
        resolve(`${name} is  not present`);
      } else {
               reject(`${name}  is present`);
      }
    }, 1000);
  });
}

async function createAccount(notPresent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Account created if ${notPresent} `);
    }, 1000);
  });
}

async function sendSignUpEmails(account) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      response(`email sent to ${account}`);
    }, 1000);
  });
}

async function userSignup() {
  try {
    const name = await getUserInfo();
    const notPresent = await checkIfAlreadyPresent(name);
    const account = await createAccount(notPresent);
    const success = await sendSignUpEmails(account);
    console.log("Its is a new account", success);
    return success;
  } catch (e) {
    console.log('Account present!');
  }
}

userSignup()
  .then((success) => {
    console.log("success is :", success);
  }).catch((error) =>{
    console.log(error)
  })
  
