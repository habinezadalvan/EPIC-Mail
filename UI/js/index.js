
const loginInput = document.getElementById('loginPassword');
const submitButton = document.getElementById('submit');

loginInput.addEventListener('input', ($event) => {
  $event.preventDefault();
  if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
});

submitButton.addEventListener('click', () => {
  submitButton.innerHTML = '<a href="./HTML/home.html"></a>';
});
