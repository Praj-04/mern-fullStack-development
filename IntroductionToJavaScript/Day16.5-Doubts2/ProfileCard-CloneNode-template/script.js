
const profileCardTemplate = document.getElementById('profile-card-template')
const container = document.getElementById('container')
async function fetchData(){
    const response = await fetch('https://dummyjson.com/users');
const data = await response.json();
const user = data.users;



bindData(user)
}

function bindData(user){
user.forEach(user => {
    const profileCardClone = profileCardTemplate.content.cloneNode(true);
    //  console.log(profileCardClone);
     const userImage = profileCardClone.querySelector('#user-img')
     const userName = profileCardClone.querySelector('#user-name')
     const userEmail = profileCardClone.querySelector('#user-email')

userName.innerHTML = `${user.firstName} ${user.lastName}`
 userImage.src = user.image
 userEmail.innerHTML=user.email
 container.appendChild(profileCardClone)

})


}


fetchData();