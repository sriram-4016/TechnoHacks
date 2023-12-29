function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    var hasError = false;

    if (username.length < 3) {
        usernameError.innerHTML = "Username must be at least 3 characters.";
        document.getElementById("username").classList.add("error");
        hasError = true;
    } else {
        usernameError.innerHTML = "";
        document.getElementById("username").classList.remove("error");
    }

    if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email address.";
        document.getElementById("email").classList.add("error");
        hasError = true;
    } else {
        emailError.innerHTML = "";
        document.getElementById("email").classList.remove("error");
    }

    if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters.";
        document.getElementById("password").classList.add("error");
        hasError = true;
    } else if (!/\d/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one digit.";
        document.getElementById("password").classList.add("error");
        hasError = true;
    } else if (!/[a-zA-Z]/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one letter.";
        document.getElementById("password").classList.add("error");
        hasError = true;
    } else {
        passwordError.innerHTML = "";
        document.getElementById("password").classList.remove("error");
    }

    if (confirmPassword !== password) {
        confirmPasswordError.innerHTML = "Passwords do not match.";
        document.getElementById("confirmPassword").classList.add("error");
        hasError = true;
    } else {
        confirmPasswordError.innerHTML = "";
        document.getElementById("confirmPassword").classList.remove("error");
    }

    if (hasError) {
        return;
    }

    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
