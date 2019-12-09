const slides = document.querySelectorAll('.slide');
const pages = document.querySelectorAll('.page');
const navOpen = document.querySelector('.nav-open');
const pageMenu = document.querySelector('.pages');

//changes dot color when you click and resets remaining
let init = () => {
    //tracker for page number
    let current = 0;
    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            changeDots(this);
        });
    });
    function changeDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add('active');
    };

    // let scroll = () => {
    //     pageNumberScroll = 0;
    //     if (pageNumberScroll === 0) {
    //         document.getElementById('dot-link').click();
    //         pageNumberScroll = 1;
    //     } if (pageNumberScroll === 1) {
    //         document.getElementById('dot-link1').click();
    //         pageNumberScroll = 0;
    //     }
    // }
    // window.addEventListener("scroll", scroll);

}

function show() {
    navOpen.classList.toggle('active');
}
init();