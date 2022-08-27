function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin123")
    {
        alert("Welcome Admin");
        window.open("admindashboard.html");
        return false;
    }
    else
    {
        alert("Invalid Username or Password");
    }
}