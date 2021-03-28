//We require three functions to be called when the user clicks on the Sign-Up button. The functions to display the username, check if 
        //the password and the repeated password are the same, and to check the length of the passwords given.
        function somefunc()
        {
            event.preventDefault();
            displayUsername();
            checkPass();
            checkLength();
            checkLengthPass();
            checkEmpty();
            document.getElementById("form").reset(); //resets the form after each function is called
        }
        //function to display a welcome message by taking in input from the username field
        function displayUsername()
        {
           
            
            var name = document.getElementById("username").value;
            
            swal({title:"Thank you for signing up", text:"User: " + name, icon: "success", button: "close"});
            
        }
        //function to check if both passwords given for repeated password and password match, if not give an error message
        function checkPass()
        {
            
            var pass = document.getElementById("pass").value;
            var rpass = document.getElementById("rpass").value;
            if(pass != rpass)
            {
                swal({title:"Passwords do not match!", text: "Please Try Again!", icon: "error", button: "close"});
            }
        }
        //function to check if the length of both passwords is less than 10 then to return an error message 
        function checkLength()
        {
            var pass = document.getElementById("pass").value;
            var rpass = document.getElementById("rpass").value;
            if(pass.length <= 10)
            {
                swal({title:"Password is too short", text: "Password must be more than 10 characters", icon: "error", button: "close"});
            }
            else if(rpass.length <= 10)
            {
                swal({title:"Password is too short", text: "Password must be more than 10 characters", icon: "error", button: "close"});
            }
        }
        function checkLengthPass()
        {
            var pass = document.getElementById("pass").value;
            var rpass = document.getElementById("rpass").value;
            if(pass.length <= 10 && pass != rpass)
            {
                swal({title:"Password cannot be validated", text: "Make sure your passwords are the same and above 10 characters ", icon: "error", button: "close"});
            }
        }
        function checkEmpty()
        {
            var pass = document.getElementById("pass").value;
            var rpass = document.getElementById("rpass").value;
            var name = document.getElementById("username").value;
            if(name == "" || pass == "" || rpass == "" )
            {
                swal({title:"Must Fill All Fields", text: "Make sure to fill all fields before signing up ", icon: "error", button: "close"});
            }
            
        }
        //with the use of these functions we know that the input from the users can be retrieved; with further exploration of databases
        //we hope to take these user inputs and store them into an php database, as we cannot do so right now.