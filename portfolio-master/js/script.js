
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

validateMail(() => {
    if (name && email && subject === '') {
        return false
        console.log('enter name')
    } else {
        return true
        console.log('proceed')
    }
})

// showError(input, message) = () => {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//   }
  
//   // Show success outline
// showSuccess(input) = () => {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
//   }


// function sendEmail() {

//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "sender@email_address.com",
//       Password: "Enter your password",
//       To: 'receiver@email_address.com',
//       From: "sender@email_address.com",
//       Subject: "Sending Email using javascript",
//       Body: "Well that was easy!!",
//     })
//       .then(function (message) {
//         alert("mail sent successfully")
        
//       });
//   }