

function onlyAlpha(evt) {

    let ch = (evt.which) ? evt.which : evt.keyCode 
    if ((ch < 65 || ch > 90) && (ch < 97 || ch > 122)) 
        return false; 
    else
        return true; 
}

function validate() {
    
    valLname();
    valDob();
    valCity();
    valEmail();
    valPhone();
    
    if(valLname() && valDob() && valCity() && valEmail() && valPhone())
        document.getElementById('message').innerHTML = 'Form validated successfully!';
    return false;
}

function valFname() {

    let fname = document.forms[0].fname;

    if(fname.value === '') {
        document.getElementById('efname').innerHTML = 'First Name cannot be left blank.';
        fname.focus();
    }

    else if(fname.value.length < 3) {
        document.getElementById('efname').innerHTML = 'First Name must contain 3 or more characters.';
        fname.focus();
    }

    else {
        document.getElementById('efname').innerHTML = '';
        return true;
    }
}

function valLname() {

    let lname = document.forms[0].lname;

    if(lname.value === '') {
        document.getElementById('elname').innerHTML = 'Last Name cannot be left blank.';
        lname.focus();
    }

    else if(lname.value.length < 3) {
        document.getElementById('elname').innerHTML = 'Last Name must contain 3 or more characters.';
        lname.focus();
    }

    else {
        document.getElementById('elname').innerHTML = '';
        return true;
    }
}

function valDob() {

    let dob = document.forms[0].dob;
    
    if(dob.value) {
        document.getElementById('edob').innerHTML = '';
        return true;
    }    
    else {
        document.getElementById('edob').innerHTML = 'Please select your Date of Birth.';
        dob.focus();        
    }
}

function valCity() {

    let city = document.forms[0].city;

    function match() {

        let digit = 0, alpha = 0, other = 0;

        for(let i = 0; i < city.value.length; i ++) {

            let ch = city.value.charCodeAt(i);

            if(((ch >= 65) && (ch <= 90)) || ((ch >= 97) && (ch <= 122)))
                alpha ++;
            else if((ch >= 48) && (ch <= 57))
                digit ++;
            else
                other ++;
        }
        
        if(((alpha >= 1) && (alpha <=3)) && (digit === 3) && (other === 0))
            return true;
        else
            return false;
    }

    if(match()) {
        document.getElementById('ecity').innerHTML = '';
        return true;
    }
    else if(city.value === '') {
        document.getElementById('ecity').innerHTML = 'City code cannot be left blank.';
        city.focus();
    }
    else {
        document.getElementById('ecity').innerHTML = 'Please enter a valid city code.';
	    city.focus();
    }
}

function valEmail() {

    let email = document.forms[0].email;
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(email.value.match(pattern)) {
        document.getElementById('eemail').innerHTML = '';
        return true;
    }
    else if(email.value === '') {
        document.getElementById('eemail').innerHTML = 'Email cannot be left blank.';
        email.focus();
    }
    else {
        document.getElementById('eemail').innerHTML = 'Please enter a valid email address.';
	    email.focus();
    }
        
}

function valPhone() {

    let phone = document.forms[0].phone;
    let pattern = /^[789]\d{9}$/;

    if(phone.value.match(pattern)) {
        document.getElementById('ephone').innerHTML = '';
        return true;
    }
    else if(phone.value === '') {
        document.getElementById('ephone').innerHTML = 'Phone number cannot be left blank.';
        phone.focus();
    }
    else {
        document.getElementById('ephone').innerHTML = 'Please enter a valid phone number.';
	    phone.focus();
    }
}