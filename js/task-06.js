const inputValid = document.querySelector('#validation-input');
const atribute = document.querySelector('input[data-length="6"]');
const atributeValue = inputValid.dataset.length;



inputValid.addEventListener('blur', () => {
    if (inputValid.value.length.toString() === atributeValue) {
        inputValid.classList.add("valid");
        
        if (inputValid.classList.contains('invalid')) {
            inputValid.classList.remove('invalid')
        }
        inputValid.classList.remove('invalid');
       
    } else {
        if (inputValid.classList.contains('valid')) {
            inputValid.classList.remove('valid')
        }
        inputValid.classList.add('invalid');
    }
       
      
});

