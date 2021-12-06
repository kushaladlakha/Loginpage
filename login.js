let usernameEl = document.querySelector('.name');
let passwordEl = document.querySelector('.feedback');
 let loginEL = document.querySelector('.login');
let correctEl = document.querySelector('.correct_msg');
let sucessEl =  document.querySelector(".login_msg");
let enterEl = document.querySelector(".enter");
let wrapperEl = document.querySelector(".wrapper");
 loginEL.addEventListener('click', hello);
 
 function hello() {
   if ((usernameEl.value === "kushaladlakha") || ( passwordEl.value === "88888")){
    sucessEl.style.display = "inline-block";
    enterEl.style.display =  "inline-block";
    correctEl.style.display = "none";
    loginEL.style.display = "none";
    wrapperEl.style.border = "2px solid #B4FE98";


   }
     /*hello boi */
   

    
else {
correctEl.style.display = "inline-block";
loginEL.style.backgroundColor = "salmon";
wrapperEl.style.border = "2px solid red";
  }
 }


   
 
  
