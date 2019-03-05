
// const loginInput = document.getElementById('loginPassword');
// const submitButton = document.getElementById('submit');



// loginInput.addEventListener('input', ($event)=>{
//     $event.preventDefault();
//     if ($event.target.value.length >= 6 && $event.target.value.length <= 12){
//         submitButton.removeAttribute('disabled') 

//     }else{
//         submitButton.setAttribute('disabled','true');
//     }
// })

// submitButton.addEventListener('click', ()=>{
//     submitButton.innerHTML ='<a href="./HTML/home.html"></a>';
// })

// SIGN UP PART

const signupPassword = document.getElementById('signupPassword');
const signupConfirmPassword = document.getElementById('signupconfirmPassword');
const errormessage = document.getElementById('errmsg');
const signupbutton = document.getElementById('signupsubmit');

signupConfirmPassword.addEventListener('blur', ()=>{
    if (signupPassword.value === signupConfirmPassword.value){
        signupPassword.style.border= 'thin solid green';
        signupConfirmPassword.style.border= 'thin solid green';
        errormessage.style.display = 'none';
    }else{
        signupPassword.style.border= 'thin solid red';
        signupConfirmPassword.style.border= 'thin solid red';
        errormessage.style.display = 'inline';
    }
})

signupPassword.addEventListener('input', ($event) =>{
    if ($event.target.value.length >= 6 && $event.target.value.length <=12){
        signupbutton.removeAttribute('disabled');
    } else{
        signupbutton.setAttribute('disabled', 'true');
    }
})


