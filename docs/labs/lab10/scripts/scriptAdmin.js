document.getElementById('addUserDiv').style.display = 'none';
document.getElementById('closeSignUp').onclick = closeCreateUser;

document.getElementById('editUserDiv').style.display = 'none';
var keyEmailValue;
document.getElementById('closeEditUser').onclick = closeEditUser;

function getData() {
    let i;
    var database = Array(localStorage.length);
    for (i = 0; i < localStorage.length; i++) {
        let user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        database[i] = user_data;
    }

    return database;
}

function removeUser(keyEmail) {
    let database = getData();

    localStorage.removeItem(database[keyEmail][2]);
    location.reload();
}

function createUser() {
    document.getElementById('addUserDiv').style.display = 'block';
    document.getElementById('createUser').style.display = 'none';
}

function closeCreateUser() {
    document.getElementById('addUserDiv').style.display = 'none';
    document.getElementById('createUser').style.display = 'inline';
}

function editUser(keyEmail) {
    document.getElementById('editUserDiv').style.display = 'block';

    let current_user_data = getData();
    let current_user_name = current_user_data[keyEmail][0];
    let current_user_surname = current_user_data[keyEmail][1];
    let current_user_email = current_user_data[keyEmail][2];
    let current_user_password = current_user_data[keyEmail][3];
    
    document.getElementById('editUserForm').innerHTML = '<input type="text" id="getNameEdit" value="' + current_user_name + '">' + '<input type="text" id="getSurnameEdit" value="' + current_user_surname + '">' + '<input type="text" id="getEmailEdit" value="' + current_user_email + '" onchange="">' + '<input type="text" id="getPasswordEdit" value="' + current_user_password + '"><button disabled id="editUserComplete">Save</button><input type="reset" value="Undo">' ;
    
    let i;
    let index_of_user;
    for (i = 0; i < current_user_data.length; i++) {
        if (current_user_email == current_user_data[i][2]) {
            index_of_user = i;
        }
    }
    document.getElementById('getEmailEdit').onchange = emailValidationForEdit((document.getElementById('getEmailEdit').value), index_of_user);

        if (!(document.getElementById('editUserComplete').disabled)) {
            document.getElementById('editUserComplete').onclick = commitChanges;
        }

        function commitChanges() {
            let new_user_email = document.getElementById('getEmailEdit').value;

                let new_user_name = document.getElementById('getNameEdit').value;
                let new_user_surname = document.getElementById('getSurnameEdit').value;
                let new_user_password = document.getElementById('getPasswordEdit').value;

                let database = getData();

                localStorage.removeItem(database[keyEmail][2]);

                let edited_user = [new_user_name, new_user_surname, new_user_email, new_user_password];
                localStorage.setItem(new_user_email, JSON.stringify(edited_user));
                location.reload();
    }
}

function closeEditUser() {
    document.getElementById('editUserDiv').style.display = 'none';
}

function showData(database) {
    let i;
    let tablecells = "";
    for (i = 0; i < database.length; i++) {
        if (database[i][2] != "admin@admin.com") {
            tablecells += ('<tr>' + '<td style="border-bottom: 1px solid green;">' + database[i][0] + '</td>' + '<td style="border-bottom: 1px solid green;">' + database[i][1] + '</td>' + '<td style="border-bottom: 1px solid green;">' + database[i][2] + '</td>' + '<td style="border-bottom: 1px solid green;">' + database[i][3] + '</td>' + '<td>' + '<button onclick="removeUser(' + i + ')" style="width: 100%">Delete</td>' + '<td>' + '<button onclick="editUser(' + i + ')" style="width: 100%" id="editButton' + i + '">Edit</td>' + '</tr>');
        }

        else {
            tablecells += ('<tr>' + '<td style="border-bottom: 1px solid green;">' + database[i][0] + '</td>' + '<td style="border-bottom: 1px solid green;">' + database[i][1] + '</td>' + '<td style="border-bottom: 1px solid green;">' + database[i][2] + '</td>' + '<td style="border-bottom: 1px solid green;">' + database[i][3] + '</td>' + '<td>' + '<button onclick="removeUser(' + i + ')" disabled style="width: 100%">Delete</td>' + '<td>' + '<button onclick="editUser(' + i + ')" disabled style="width: 100%" id="editButton' + i + '" disabled>Edit</td>' + '</tr>');
        }
    }

    document.getElementById('databasebody').innerHTML = tablecells;
}

showData(getData());

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

function emailValidationForEdit(value, index) {
    let i;
    let status;

    alert(value + ' ' + index);

    for (i = 0; i < localStorage.length; i++) {
        if (i != index) {
            let user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

            if (String(value) == user_data[2]) {
                status = false;
                alert('Account with this email is already exist!');
            }
        
            else {
                status = true;
            }
        }

        else {
            status = true;
        }
    }

    if (status) {
        document.getElementById('editUserComplete').removeAttribute('disabled');
    }
    return status;
}

function emailValidation(value) {
    let i;
    let status;
    for (i = 0; i < localStorage.length; i++) {
        let user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (String(value) == user_data[2]) {
            document.getElementById('validationInfoEmailUp').innerHTML = '<text style="color: red">Account with this email is already exist</text>';
            status = false;
        }
        
        else {
            document.getElementById('validationInfoEmailUp').innerHTML = '<text style="color: green">Success</text>';
            status = true;
        }
    }

    return status;
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
        alert('Account was successfully added.');
    }
    else {
        alert("Unexpected error!");
    }
}