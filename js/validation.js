function validate() {
			// all our validation goes here

var x=document.forms["myform"]["your_name"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }


		
var x=document.forms["myform"]["your_email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }

  var x=document.forms["myform"]["your_message"].value;
if (x==null || x=="")
  {
  alert("Type your message, please");
  return false;
  }

}


function validate_login() {
  // email/login validation
  var email=document.forms["sign_in"]["your_email"].value;
  var atpos=email.indexOf("@");
  var dotpos=email.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
  {
    alert("Not a valid e-mail address");
    return false;
  }

  // password validation
  var invalid_char = " "; // Invalid character is a space
  var minLength = 6; // Minimum length
  var pw_el = document.forms["sign_in"]["pwd"];
  
  // check for a value
  if (pw_el.value == '') {
    alert('Please enter your password.');
    return false;
  }

  // check if password equals login
  if (pw_el.value == email) {
    alert('You can not use your email as a password.');
    return false;
  }

  // check for minimum length
  if (pw_el.value.length < minLength) {
    alert('Your password must be at least ' + minLength + ' characters long. Try again.');
    return false;
  }

  // check for invalid character
  if (pw_el.value.indexOf(invalid_char) > -1) {
    alert("Sorry, spaces are not allowed.");
    return false;
  }
 
}

function validate_reg() {
  //registration validation
  //checks name not blank
  var name=document.forms["register"]["fname"].value;
if (name==null || name=="")
  {
  alert("First name must be filled out");
  return false;
  }

//checks last name not blank
  var lname=document.forms["register"]["lname"].value;
if (lname==null || lname=="")
  {
  alert("Last name must be filled out");
  return false;
  }

//checks email format
  var email=document.forms["register"]["your_email"].value;
  var atpos=email.indexOf("@");
  var dotpos=email.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
  {
    alert("Not a valid e-mail address");
    return false;
  }
//checks address not blank
 var address=document.forms["register"]["address"].value;
if (address==null || address=="")
  {
  alert("Type your address, please");
  return false;
  }

  // password validation
  var invalid_char = " "; // Invalid character is a space
  var minLength = 6; // Minimum length
  var pw1_el = document.forms["register"]["pwd1"];
  var pw2_el = document.forms["register"]["pwd2"];

  // check for a value in both fields.
  if (pw1_el.value != pw2_el.value) {
    alert('Passwods do not match.');
    return false;
  }
  
  // check for a value
  if (pw1_el.value == '') {
    alert('Please enter your password.');
    return false;
  }

  // check if password equals login
  if (pw1_el.value == email) {
    alert('You can not use your email as a password.');
    return false;
  }

  // check for minimum length
  if (pw1_el.value.length < minLength) {
    alert('Your password must be at least ' + minLength + ' characters long. Try again.');
    return false;
  }

  // check for invalid character
  if (pw1_el.value.indexOf(invalid_char) > -1) {
    alert("Sorry, spaces are not allowed.");
    return false;
  }

  //validate phone number

  var phone = document.forms["register"]["phone"].value;
  if (phone == null || phone == "") {
     alert("Type your phone number, please");
     return false;
  }

  if (isNaN(phone) || phone.indexOf(" ")! = -1) {
     alert("Enter numeric value");
     return false;
  }
             
  if (phone).length > 10) {
    alert("phone number must have maximum 10 characters"); 
    return false;
  }

  if (phone).length < 7) {
    alert("phone number must have minimum characters"); 
    return false;
  }

}