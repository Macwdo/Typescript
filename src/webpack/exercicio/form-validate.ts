const form = document.querySelector(".form") as HTMLFormElement;

const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

const validateUsername = (field: string): boolean => {
    if (field.length >= 8 && field.length <= 12) return true;
    return false;
};

const validatePasswordEqual = (pass: string, pass2: string): boolean => {
    if (pass !== pass2) return false;
    if (pass.length <= 8 || pass2.length <= 8) return false;
    return true;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(password.parentElement);
    const passwordIsValid = validatePasswordEqual(password.value, password2.value);
    const usernameIsValid = validateUsername(username.value);
    if (passwordIsValid && usernameIsValid) {
        form.submit();
    }
});
