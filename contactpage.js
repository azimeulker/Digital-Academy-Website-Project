/*
Project 4
Name: Azime Ulker
 Date: 2022.04.14
Description: This program includes contact page JavaScript code.
*/

document.addEventListener('DOMContentLoaded', function() {
    // Get all inputs and error messages
    const form = document.getElementById('contact-form');
    const fullnameInput = form.elements['first-name'];
    const lastnameInput = form.elements['last-name'];
    const emailInput = form.elements['email'];
    const phoneInput = form.elements['phone'];
    const messageInput = form.elements['message'];
    const fullnameError = document.getElementById('fullname_error');
    const lastnameError = document.getElementById('lastname_error');
    const emailError = document.getElementById('email_error');
    const phoneError = document.getElementById('phone_error');
    const messageError = document.getElementById('message_error');

    // Hide error messages initially
    fullnameError.style.display = 'none';
    lastnameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    messageError.style.display = 'none';

    // Add an event listener to the form submit button
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate the form inputs
        let isValid = true;

        if (fullnameInput.value.trim() === '') {
            fullnameError.style.display = 'block';
            isValid = false;
        }

        if (lastnameInput.value.trim() === '') {
            lastnameError.style.display = 'block';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.style.display = 'block';
            isValid = false;
        }

        if (phoneInput.value.trim() === '') {
            phoneError.style.display = 'block';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        }

        // If all inputs are valid, show the success message
        if (isValid) {
            const successMessage = document.createElement('p');
            successMessage.innerText = 'Form submitted successfully!';
            successMessage.style.color = 'green';
            document.getElementById('error-messages').appendChild(successMessage);
            form.reset();

            // Hide error messages again
            fullnameError.style.display = 'none';
            lastnameError.style.display = 'none';
            emailError.style.display = 'none';
            phoneError.style.display = 'none';
            messageError.style.display = 'none';
        }
    });

    // Add event listeners to remove error messages when user types in input fields
    fullnameInput.addEventListener('input', function() {
        fullnameError.style.display = 'none';
    });

    lastnameInput.addEventListener('input', function() {
        lastnameError.style.display = 'none';
    });

    emailInput.addEventListener('input', function() {
        emailError.style.display = 'none';
    });

    phoneInput.addEventListener('input', function() {
        phoneError.style.display = 'none';
    });

    messageInput.addEventListener('input', function() {
        messageError.style.display = 'none';
    });

    // Add event listener to reset button to clear form and error messages
    form.elements['reset-btn'].addEventListener('click', function() {
        form.reset();
        fullnameError.style.display = 'none';
        lastnameError.style.display = 'none';
        emailError.style.display = 'none';
        phoneError.style.display = 'none';
        messageError.style.display = 'none';
        document.getElementById('error-messages').innerHTML = '';
    });
});







