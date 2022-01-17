// Maybe making the "click" events touch events to fix the safari issue...
// https://stackoverflow.com/questions/24077725/mobile-safari-sometimes-does-not-trigger-the-click-event

const login = document.querySelector('.login')
const slides = document.querySelectorAll('.slide')
const menuBtn = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu-links')
const menuLinks = menuContainer.childNodes
const logoLink = document.querySelector('.logo')
const loginBox = document.querySelector('.login')
let currentSlide = 1

logoLink.addEventListener('click', contractMenu)
menuBtn.addEventListener('click', expandMenu)
menuLinks.forEach(el => {
    el.addEventListener('click', contractMenu)
})

// Safari hack to prevent the need to double-touch links
window.addEventListener('touchstart', () => {})
window.addEventListener('touchend', () => {})
window.addEventListener('touchcancel', () => {})
window.addEventListener('touchmove', () => {})

function expandMenu(){
    console.log('menu expanding...')
    menuContainer.style.display = 'flex'
    menuContainer.style.top = '50px'
    menuBtn.removeEventListener('click', expandMenu)
    menuBtn.addEventListener('click', contractMenu)
    
    
}

function contractMenu(){
    menuContainer.style.top = '-100vh'
    menuBtn.removeEventListener('click', contractMenu)
    menuBtn.addEventListener('click', expandMenu)
}

function rotateImages(){
    let active = document.getElementsByClassName('active')
    let i = 1

    let repeater = () => {
        setTimeout( () => {
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove('active');
            });
      
            slides[i].classList.add('active')
            i++

            if (slides.length === i) {
                    i = 0;
                }
                if (i >= slides.length) {
                    return;
            }
            repeater();
        }, 3000);
    }
    repeater();
}
rotateImages()
