
const navBackGround = document.getElementById('navId');

const BackgroundChange = (event) => {
    if (scrollY >= 100) {
        navBackGround.classList.toggle('navigation-backgroundcolor');
    }
}

document.addEventListener('scroll', BackgroundChange);

