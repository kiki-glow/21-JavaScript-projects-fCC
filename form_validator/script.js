const usernameEl = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const emailEl = document.getElementById("email");
const emailError = document.getElementById("emailError");
const submitBtn = document.getElementById("submitBtn");
const formSuccess = document.getElementById("formSuccess");

const usernameRegex = /^[a-zA-Z0-9_]+$/;
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i;

document.getElementById("registrationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // username validation
    const username = usernameEl.value.trim();
    const email = emailEl.value.trim()

    if (username.length < 3 || username.length > 15) {
        usernameError.textContent = "Username must contain 3 to 15 characters";
        isValid = false;
    } else if (!usernameRegex.test(username)) {
        usernameError.textContent = "Invalid username. Allows (letters, numbers, and underscore)";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // email validation
    if (email === "") {
        emailError.textContent = "Email is required!";
        isValid = false;
    } else if(!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // success message
    if (isValid){
        formSuccess.style.display = "block";
        formSuccess.textContent = "Registration Successful! Welcome aboard."

        setTimeout(() => {
            formSuccess.style.display = "none";
        }, 4000);

        // document.getElementById("registrationForm").reset();
    }
})
