document.getElementById("signUp").onclick = signUp;

function checkPasswordRepeat(value) {
    let password = document.getElementById("user_password").value;

    if (value != password) {
        document.getElementById("validationInfoPasswordRepeat").innerHTML = '<text style="color: red">Passwords are not same!</text>';
        return false;
    }
    else {
        document.getElementById("validationInfoPasswordRepeat").innerHTML = '<text style="color: green">Success</text>';
        return true;
    }
}

function emailValidation(value) {
    let i;
    for (i = 0; i < localStorage.length; i++) {
        let user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (String(value) == user_data[2]) {
            document.getElementById('validationInfoEmailUp').innerHTML = '<text style="color: red">Account with this email is already exist</text>';
            return false;
        }
        
        else {
            document.getElementById('validationInfoEmailUp').innerHTML = '<text style="color: green">Success</text>';
            return true;
        }
    }
}

function passwordValidation(value) {
    if (value.length < 8) {
        document.getElementById("validationInfoPasswordUp").innerHTML = '<text style="color: red">Passwords should contain at least 6 characters</text>';
        return false;
    }

    else if (value.length > 15) {
        document.getElementById("validationInfoPasswordUp").innerHTML = '<text style="color: red">Passwords cannot be mroe than 15 characters</text>';
        return false;
    }

    else if (value.length <= 0) {
        document.getElementById("validationInfoPasswordUp").innerHTML = '<text style="color: red">Passwords cannot be empty</text>';
        return false;
    }

    else {
        document.getElementById("validationInfoPasswordUp").innerHTML = '<text style="color: green">Success</text>';
        return true;
    }
}

function signUpVaildation() {
    var user_name = document.getElementById("user_name").value;
    var user_surname = document.getElementById("user_surname").value;
    var user_email = document.getElementById("user_email").value;
    emailValidation(user_email);
    var user_password = document.getElementById("user_password").value;
    passwordValidation(user_password);
    var user_password_repeat = document.getElementById("password_repeat").value;
    checkPasswordRepeat(user_password_repeat);

    if (passwordValidation(user_password) && checkPasswordRepeat(user_password_repeat) && emailValidation(user_email)) {
        document.getElementById('signUp').removeAttribute('disabled');
    }
}

function signUp() {
    var user_name = document.getElementById("user_name").value;
    var user_surname = document.getElementById("user_surname").value;
    var user_email = document.getElementById("user_email").value;
    var user_password = document.getElementById("user_password").value;
    passwordValidation(user_password);
    var user_password_repeat = document.getElementById("password_repeat").value;
    checkPasswordRepeat(user_password_repeat);

    if (passwordValidation(user_password) && checkPasswordRepeat(user_password_repeat) && emailValidation(user_email)) {
        let user = [user_name, user_surname, user_email, user_password];

        localStorage.setItem(user_email, JSON.stringify(user));
        window.location.href = "profile.html";
        alert('Name: ' + user_name + '\nSurname: ' + user_surname + '\nEmail: ' + user_email + '\nFirst password: ' + user_password + '\nRepeat: ' + user_password_repeat + '\n\nAccount was succesfully created. Please go to Sign In page and log in into system.');
    }
    else {
        alert("Unexpected error!");
    }
}