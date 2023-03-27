let loader = document.querySelector('.loader');
let applyBtn = document.querySelectory('.apply-btn');

applyBtn.addEventListener('click', () =>{
    let businessName = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let about = document.querySelector('#about').value;
    let number = document.querySelector('#number').value;

    if(!businessName.length || !address.length || !about.length || number.length < 10 || !Number(number)){
       showFormError('some information(s)'is/are incorrect); 
    }





})