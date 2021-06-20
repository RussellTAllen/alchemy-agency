const portalBtn = document.querySelector('.portal-btn')
const login = document.querySelector('.login')
const slides = document.querySelectorAll('.slide')
let currentSlide = 1

portalBtn.addEventListener('click', portalDropdown)

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
