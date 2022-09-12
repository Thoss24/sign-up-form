let password = document.querySelector('#user-password');
let confirm = document.querySelector('#confirm-password');
let error = document.querySelector('#error-message');

function checkPassword() {
   error.textContent = password.value == confirm.value ? '' : '* Passwords do not match';  // If password is equal to confirm password return '' else return error message.
}

password.addEventListener('keyup', () => {
    if (confirm.value.length != 0) checkPassword();  // As long as confirm password input is not empty, invoke checkPassword to return either '' or error message.
})

confirm.addEventListener('keyup', checkPassword) // On each keyup event, check if password and confirm password are equal in value.














