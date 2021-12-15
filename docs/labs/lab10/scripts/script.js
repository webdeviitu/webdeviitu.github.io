document.getElementById("signIn").onclick = signIn;
document.getElementById("exit").onclick = exit;

if (sessionStorage.length >= 2) {
    document.getElementById('signindiv').style.display = 'none';

    let user_data = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
    document.getElementById("user_name_profile").innerHTML = '<i>' + user_data[0] + '</i>';
    document.getElementById("user_surname_profile").innerHTML = user_data[1];
    document.getElementById("user_email_profile").innerHTML = user_data[2];

    if (user_data[2] == 'admin@admin.com') {
        document.getElementById("user_admin_profile").innerHTML = '<a href="adminpanel.html">Admin panel</a>';
    }
}

else if (sessionStorage.length < 2) {
    document.getElementById('profilediv').style.display = 'none';
}

function signInCheck(ui_email, ui_password) {
    let i;
    for (i = 0; i < localStorage.length; i++) {
        let user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (String(ui_email) ==  user_data[2]){ //validationInfoEmailIn
            document.getElementById("validationInfoEmailIn").innerHTML = '<text style="color: green">Email is in database</text>';

            if (ui_password == user_data[3]) {
                document.getElementById("validationInfoPasswordIn").innerHTML = '<text style="color: green">Password is correct. Welcome, ' + user_data[0] + '</text>';
                alert('Password is correct. Welcome, ' + user_data[0] + ' ' + user_data[1]);
                document.getElementById("signIn").removeAttribute('disabled');

                document.getElementById('signIn').onclick = signIn(user_data);
            }

            else {
                document.getElementById("validationInfoPasswordIn").innerHTML = '<text style="color: red">Password is incorrect!</text>';
            }
        }
        else {
            document.getElementById("validationInfoEmailIn").innerHTML = '<text style="color: red">Email is NOT in database</text>';
            document.getElementById("validationInfoPasswordIn").innerHTML = '<text style="color: red">Email is NOT in database and password wont be accepted!</text>';
        }
    }
}

function signIn(user_data) {
    let user = user_data;
    sessionStorage.setItem('current_user_data', JSON.stringify(user));
}

function exit() {
    sessionStorage.removeItem('current_user_data');
    location.reload();
}