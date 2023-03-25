let formBtn = document.querySelector('.button');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click',() => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    loader.style.display='block';
    sendData('/signup', {
        name: fullname.value,
        email: email.value,
        password: password.value,
    })

})