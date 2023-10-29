function validateEmail() {
    var emailInput = document.getElementById('email');
    var resultMessage = document.getElementById('result');

    // Regular expression for basic email validation
    var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if (emailRegex.test(emailInput.value)) {
        resultMessage.style.color = 'green';
        resultMessage.innerHTML = 'Valid email address!';
    } else {
        resultMessage.style.color = 'red';
        resultMessage.innerHTML = 'Invalid email address. Please enter a valid email.';
    }
}
