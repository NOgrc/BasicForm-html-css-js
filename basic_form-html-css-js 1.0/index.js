const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const messageValue = message.value.trim();

    if (usernameValue === '') {
        setError(username, 'Kullanıcı Adı Boş Bırakılamaz!');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'E-mail Boş Bırakılamaz!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Lütfen Düzgün Bir E-mail Giriniz.');
    } else {
        setSuccess(email);
    }

    if (ageValue === '') {
        setError(age, 'Yaş, Boş Bırakılamaz!');
    } else if (ageValue.length < 2) {
        setError(age, 'Lütfen yaşınızı düzgün giriniz!')
    } else {
        setSuccess(age);
    }

    if (messageValue === '') {} else if (messageValue !== messageValue) {
        setError(message);
    } else {
        setSuccess(message);
    }

};