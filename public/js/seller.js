import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCq3Q5P2c2NJcZMtD7JJl59h7kWKthS79w",
  authDomain: "evive-8a537.firebaseapp.com",
  databaseURL: "https://evive-8a537-default-rtdb.firebaseio.com",
  projectId: "evive-8a537",
  storageBucket: "evive-8a537.appspot.com",
  messagingSenderId: "1007208283634",
  appId: "1:1007208283634:web:9759ec2552d4eb44663f6b",
  measurementId: "G-ZNQG7W6V7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    
    if(user == null){
        location.replace('/login');
    } else if(user.seller){
        location.replace('/dashboard');
    }
}

let loader = document.querySelector('.loader');
let applyBtn = document.querySelector('.apply-btn');

applyBtn.addEventListener('click', () => {
    let businessName = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let about = document.querySelector('#about').value;
    let number = document.querySelector('#number').value;

    if(!businessName.length || !address.length || !about.length || number.length < 10 || !Number(number)){
        showFormError('some information(s) is/are incorrect');
    } else{
        // send data
        loader.style.display = 'block';
        sendData('/seller', {
            name: businessName,
            address: address,
            about: about,
            number: number,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})