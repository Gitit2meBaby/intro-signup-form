
const button = document.getElementById("claimBtn");



// VALIDATE FIRST NAME INPUT FIELD
const firstName = document.querySelector('.first-name');
const firstNameInput = document.querySelector('#firstNameInput');
const firstNameImg = document.querySelector('#firstNameImg');

firstNameInput.addEventListener('focus', () => {
    const existingError = document.querySelector('.first-name-error');
    if (existingError) {
        existingError.remove();
        firstNameImg.classList.add('hidden');
        firstNameInput.classList.remove('invalid-input');
    }
});

button.addEventListener('click', () => {
    const errorMsg = document.createElement('p')
    if (firstNameInput.value === "") {
        errorMsg.textContent = 'First Name cannot be empty';
        errorMsg.classList.add('invalid')
        errorMsg.classList.add('first-name-error')
        firstName.appendChild(errorMsg);
        firstNameInput.classList.add('invalid-input')
        firstNameImg.classList.remove('hidden')
    } else {
        const existingError = document.querySelector('.invalid');
        if (existingError) {
            existingError.remove();
            firstNameImg.classList.add('hidden');
        }
    }

})


// LAST NAME VALIDATION
const lastName = document.querySelector('.last-name');
const lastNameInput = document.querySelector('#lastNameInput');
const lastNameImg = document.querySelector('#lastNameImg');

lastNameInput.addEventListener('focus', () => {
    const existingError = document.querySelector('.last-name-error');
    if (existingError) {
        existingError.remove();
        lastNameImg.classList.add('hidden');
        lastNameInput.classList.remove('invalid-input');
    }
});

button.addEventListener('click', () => {
    const errorMsg = document.createElement('p')
    if (lastNameInput.value === "") {
        errorMsg.textContent = 'Last Name cannot be empty';
        errorMsg.classList.add('invalid')
        errorMsg.classList.add('last-name-error')
        lastName.appendChild(errorMsg);
        lastNameInput.classList.add('invalid-input')
        lastNameImg.classList.remove('hidden')
    } else {
        const existingError = document.querySelector('.invalid');
        if (existingError) {
            existingError.remove();
            lastNameImg.classList.add('hidden');
        }
    }

})


// EMAIL VALIDATION
const email = document.querySelector('.email');
const emailInput = document.querySelector('#emailInput');
const emailImg = document.querySelector('#emailImg');

function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

emailInput.addEventListener('focus', () => {
    const existingError = document.querySelector('.email-error');
    if (existingError) {
        existingError.remove();
        emailImg.classList.add('hidden');
        emailInput.classList.remove('invalid-input');
    }
});

button.addEventListener('click', () => {
    const errorMsg = document.createElement('p')
    if (emailInput.value === "" || !validateEmail(emailInput.value)) {
        errorMsg.textContent = 'Looks like this is not an email';
        errorMsg.classList.add('invalid')
        errorMsg.classList.add('email-error')
        email.appendChild(errorMsg);
        emailInput.classList.add('invalid-input')
        emailImg.classList.remove('hidden')
    } else {
        const existingError = document.querySelector('.invalid');
        if (existingError) {
            existingError.remove();
            emailImg.classList.add('hidden');
        }
    }

})

// PASSWORD VALIDATION
const password = document.querySelector('.password');
const passwordInput = document.querySelector('#passwordInput');
const passwordImg = document.querySelector('#passwordImg');

passwordInput.addEventListener('focus', () => {
    const existingError = document.querySelector('.password-error');
    if (existingError) {
        existingError.remove();
        passwordImg.classList.add('hidden');
        passwordInput.classList.remove('invalid-input');
    }
});

button.addEventListener('click', () => {
    const errorMsg = document.createElement('p')
    if (passwordInput.value === "") {
        errorMsg.textContent = 'Password cannot be empty';
        errorMsg.classList.add('invalid')
        errorMsg.classList.add('password-error')
        password.appendChild(errorMsg);
        passwordInput.classList.add('invalid-input')
        passwordImg.classList.remove('hidden')
    } else {
        const existingError = document.querySelector('.invalid');
        if (existingError) {
            existingError.remove();
            passwordImg.classList.add('hidden');
        }
    }

})