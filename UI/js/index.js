
const loginInput = document.getElementById('loginPassword');
const submitButton = document.getElementById('submit');

loginInput.addEventListener('input', ($event)=>{
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12){
        submitButton.removeAttribute('disabled');
        submitButton.innerHTML= '<a href="./HTML/home.html"></a></a>'
    }else{
        submitButton.setAttribute('disabled', 'true');
    }
})



