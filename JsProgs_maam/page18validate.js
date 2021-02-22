function validate()
{
	var txt1 = document.forms[0].Name;
	if(txt1.value=="")
		 {alert("Name cannot be left blank");
		  txt1.focus();
		 }
	else if(txt1.value.length<4)
		{alert("Name cannot be <4 chars");
		  txt1.focus();}

}
function ValidateAlpha(evt)
{  
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
         return false;
    else
        return true;
}
function validateEmail()
{
	var mailformat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	if(document.forms[0].EMail.value.match(mailformat))
	{
		document.forms[0].Password.focus();
	}
	else
	{
	alert("You have entered an invalid email address!");
	document.forms[0].EMail.focus();
	
	}	

}