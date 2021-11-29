const commute = 3;

function input_name_validation(input_value) {
    if (input_value == '') {
        document.getElementById("checkinput").innerHTML = "Empty field!";
    }

    else {
        document.getElementById("checkinput").innerHTML = "ОК!"
    }
}

function input_validation(input_value) {
    if (input_value == '') {
        document.getElementById("checkinput").innerHTML = "Empty field!";
    }

    else if (isNaN(input_value)) {
        document.getElementById("checkinput").innerHTML = "Enter integer number or float number!";
    }

    else if (parseFloat(input_value) > 24) {
        document.getElementById("checkinput").innerHTML = "Number can't be more than 24!";
    }

    else {
        document.getElementById("checkinput").innerHTML = "OK!";
    }
}

function calculate() {
    let username = document.getElementById("username").value;
    let asleep = parseFloat(document.getElementById("aspleetime").value);
    let study = parseFloat(document.getElementById("studytime").value);
    let lectureprep = parseFloat(document.getElementById("lecturepreptime").value);
    let socialnetworks = parseFloat(document.getElementById("socialnetworkstime").value);

    if (isNaN(asleep) || isNaN(study) || isNaN(lectureprep) || isNaN(socialnetworks)) {
        document.getElementById("jsinfo").innerHTML = "One of the fields has incrrect input!";
    }

    else {
        let total_calc = (24 - asleep - study - lectureprep - socialnetworks - commute);

        if (total_calc < 0) {
            document.getElementById("jsInfo").innerHTML = "It's more than 21 hours in sum per day! Try again.";
        }

        else {
            document.getElementById("jsinfo").innerHTML = username + ", you should relax for " + total_calc + " hours per day.";
        }
    }
}