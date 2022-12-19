const boxInfo = document.getElementById('apple-data');
const phoneImage = document.getElementById('phone-image')
async function fetchData() {
    try {

        const boxLoad = document.getElementById('box');
const loadingLoad = document.getElementById('loading')

loadingLoad.style.display= 'block';
boxLoad.style.display= 'none';


        const response = await fetch('https://dummyjson.com/products/1');
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData)

   
loadingLoad.style.display= 'none';
boxLoad.style.display= 'block';

        boxInfo.innerHTML = `<h4> Price :${jsonData.price} <h4> 
<h4> Description : ${jsonData.description} <h4>`
            ;
        boxInfo.classList.add('apple-data')
        // box.appendChild(boxInfo);
        phoneImage.src = jsonData.thumbnail;
        // box.appendChild(phoneImage);

    } catch (err) {
        console.log(err);
    }

}


fetchData()


