let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
    ];
    

    //a. Filter the users whose firstName is “Susan”.

     const result = users.filter((element)=>{
      for(let i=0;i<users.length;i++){
        if(element.firstName === 'Susan'){
            return users[i]
        }
    }
     //return element.firstName.includes('Susan');
  

    })

    console.log(result);


    //b. Filter out the users whose lastName starts with the letter L.
    const result1 = users.filter((element)=>{
        return element.lastName.startsWith('L');
    })
    console.log(result1);

    //c.Map and return an array called fullName with full name values like “Susan Steward”
    const fullname = users.map((element)=>{
        const {firstName , lastName} = element;
        return (firstName+" "+lastName)
    })

   console.log(fullname);
