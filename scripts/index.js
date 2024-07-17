var element = document.getElementById('my-image-container');
element.classList.add('expand');
const menu = document.getElementById('menu');
const close=document.getElementById('close');
const navbar = document.getElementById('nav');
const menuDropDown=document.getElementById('menu-dropdown');
const menuLinks=document.querySelectorAll('.menu-link');

function handleMenuDisplay() {    
    if (window.innerWidth < 600) {
        navbar.style.display = 'none';
        menu.style.display = 'block';
        close.style.display='none';
        menuDropDown.display='none';
    } else {
        navbar.style.display = 'block';
        menu.style.display = 'none';
        close.style.display='none';
        menuDropDown.display='none';
    }
}

handleMenuDisplay();
window.addEventListener('resize', handleMenuDisplay);

function toggleMenuContent(){
    menuDropDown.style.display=menuDropDown.style.display==='block'?'none':'block';
    menu.style.display=menu.style.display==='none'?'block':'none';
    close.style.display=close.style.display==='block'?'none':'block';
}
menu.addEventListener('click',toggleMenuContent);
close.addEventListener('click',toggleMenuContent);

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click',toggleMenuContent);
});

const words = ['FullStack Developer', 'Web Developer' ,'BlockChain Developer']; // Words to display
const wordAnimation = document.querySelector('#myprofession');

function animateWords(words) {
    let wordIndex = 0;

    function typeWord() {
        wordAnimation.textContent = words[wordIndex];
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    setInterval(typeWord, 1000); // Adjust timing as needed
}

animateWords(words);

setTimeout(()=>{
    element.classList.remove('expand');
},2000);
