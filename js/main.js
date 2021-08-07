const portalBtn = document.querySelector('.portal-btn')
const login = document.querySelector('.login')
const slides = document.querySelectorAll('.slide')
const menuBtn = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu-links')
const menuLinks = menuContainer.childNodes
const logoLink = document.querySelector('.logo')
const loginBox = document.querySelector('.login')
let currentSlide = 1

portalBtn.addEventListener('click', portalDropdown)
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
// menuContainer.addEventListener('touchstart', () => {})
// menuContainer.addEventListener('touchend', () => {})
// menuContainer.addEventListener('touchcancel', () => {})
// menuContainer.addEventListener('touchmove', () => {})
// loginBox.addEventListener('touchstart', () => {})
// loginBox.addEventListener('touchend', () => {})
// loginBox.addEventListener('touchcancel', () => {})
// loginBox.addEventListener('touchmove', () => {})

function expandMenu(){
    console.log('menu expanding...')
    // menuBtn.classList.add('hidden')
    menuContainer.style.display = 'flex'
    menuContainer.style.top = '50px'
    menuBtn.removeEventListener('click', expandMenu)
    menuBtn.addEventListener('click', contractMenu)
    
    
}

function contractMenu(){
    menuContainer.style.top = '-100vh'
    // menuContainer.style.display = 'none'
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

function portalDropdown(){
    portalBtn.removeEventListener('click', portalDropdown)
    login.classList.remove('hidden')

    setTimeout(() => window.addEventListener('click', removePortalDropdown), 1)
}

function removePortalDropdown(){
    window.removeEventListener('click', removePortalDropdown)
    login.classList.add('hidden')

    portalBtn.addEventListener('click', portalDropdown)
}
