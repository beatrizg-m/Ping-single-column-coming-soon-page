const email = document.getElementById('inputEmail');
const form = document.querySelector('form');
const textEmail = document.getElementById('textEmail');
const button = document.getElementById('submitButton');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(email.value === ''){
        textEmail.textContent = 'Whoops! It looks like you forgot to add your email';
    }
    else if(validatorEmail(email.value) !== true){
        email.style.border = '1.2px solid #f7a4b2';
        // email.classList.add('test');
        textEmail.textContent = 'Please provide a valid email address';
        textEmail.style.color = '#f7a4b2'
        clearInput(email);
    }
    else{
        email.style.border = '1.2px solid green';
        textEmail.textContent = 'Aceito'
        textEmail.style.color = 'green'
    }
})

function clearInput(email){
    if(email.value !== '') {
        email.value = '';
    }
}

function validatorEmail (email){
    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}
