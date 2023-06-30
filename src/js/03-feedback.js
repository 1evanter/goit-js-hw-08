import throttle from '/node_modules/lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const inputData = {
    email: '',
    message: '',
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateInputForm();

function onFormInput() {
    inputData.email = refs.input.value;
    inputData.message = refs.textarea.value;

    const dataJSON = JSON.stringify(inputData);

    localStorage.setItem(STORAGE_KEY, dataJSON);
};

function populateInputForm() {
    const savedDataJSON = localStorage.getItem(STORAGE_KEY);
    let savedData = {};
    if (savedDataJSON) {
        try {
            savedData = JSON.parse(savedDataJSON);
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        };
        refs.input.value = savedData.email;
        refs.textarea.value = savedData.message;

        inputData.email = refs.input.value;
        inputData.message = refs.textarea.value;
    }
};

function onFormSubmit (evt) {
    evt.preventDefault();

    if (refs.input.value === "" || refs.textarea.value === "") {
        alert('Fill all the fields!');
    } else {
        console.log(inputData);
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
};