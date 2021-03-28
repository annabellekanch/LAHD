//funcion to display different messages depending on the input given by the user. Currently we do not have a working database to input 
//username and password information of a user, once we get further into our respective CSC major fields we will incorporate a database into
//our project
//function calling all functions upon click of the ok button
function checkUser()
{
    event.preventDefault();
    checkFail();
    correctUser();
    checkEmpty();
    document.getElementById("form").reset();
}
//function to demonstrate what happens if a user in our database were to enter their credentials
function correctUser()
{
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    
    if(username == "AnnabelleKanch")
    {
        if(password == "something")
        {
            swal({title:"Welcome " + username, icon: "success", button: "Close"});
        }
    }
}
//functions to check if any of the fields were left empty by the user
function checkEmpty()
{
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    if(username == "" || password == "")
    {
        swal({title:"Please Enter All Fields", icon: "error", button: "Close"});
    }
}
//function to check if the user entered anything besides the correct user credentials
function checkFail()
{
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    
    if(username != "Annabelle" || password != "something")
    {
        swal({title:"Invalid Username & Password Combination", text: "Register as a new user or Try Again!" ,icon: "error", button: "Close"});
    }
    if(password != "" || password != "")
    {
        swal({title:"Invalid Username & Password Combination", text: "Register as a new user or Try Again!" ,icon: "error", button: "Close"});
    }
}