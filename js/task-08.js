const form = document.querySelector(".login-form");

form.addEventListener('submit', onSearch);
function onSearch(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);  
    event.currentTarget.reset();
}
