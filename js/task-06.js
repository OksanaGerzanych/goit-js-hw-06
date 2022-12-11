const inputValid = document.querySelector('#validation-input');
const atribute = document.querySelector('input[data-length="6"]');
const atributeValue = inputValid.dataset.length;


inputValid.addEventListener('blur', () => {
    if (inputValid.value.length.toString() === atributeValue) {
        inputValid.classList.add("valid");
        inputValid.classList.remove('invalid')
       
    } else {
        inputValid.classList.add('invalid');
        inputValid.classList.remove('valid')
    }
        
});
