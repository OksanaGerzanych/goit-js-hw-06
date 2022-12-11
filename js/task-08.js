const form = document.querySelector(".login-form");

form.addEventListener('submit', onSearch);
function onSearch(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements ;
    if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
    }
    const formValue = { email: email.value, Password: password.value };
    console.log(formValue);  
    event.currentTarget.reset();
}

