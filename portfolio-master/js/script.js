const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');
const btn = document.querySelector('.btn')

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// send mail
const name = document.querySelector('.your-name')
const email = document.querySelector('.you-email')
const subject = document.querySelector('.subject')

document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault()
    validateMail()
})

function validateMail() {
    if (name.value === '' || email.value === '' || subject.value === '') {
        console.log('enter all fields')
        return false
    } else {
        console.log('proceed')
        return true
    }
}