function favali()
{
    var name = document.forms["sendmail"]["Name"];
    var contact = document.forms["RegForm"]["Contact"];
    var email = document.forms["RegForm"]["Email"];
    var message =  document.forms["RegForm"]["Message"];

    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (contact.value == "")
    {
        window.alert("Please enter your contact.");
        contact.focus();
        return false;
    }

    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail.");
        email.focus();
        return false;
    }

    if (message.value == "")
    {
        window.alert("Please enter a message");
        message.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    return true;
}
