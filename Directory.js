//Javascript Styling for Search Button
//Active function will detect when user clicks on the search bar and then allow the user to input the city while the placeholder still remain as "Search for a city"
function active()
{
    var searchBar = document.getElementById('searchBar');
    if(searchBar.value == 'Search for a city')
    {
        searchBar.value = '';
        searchBar.placeholder = 'Search for a city';
    }
}
//Inactive function will make the search bar value "Search for a city" when the search bar place holder is an empty string
function inactive()
{
    var searchBar = document.getElementById('searchBar');
    if(searchBar.value == '')
    {
        searchBar.value = 'Search for a city';
        searchBar.placeholder = '';
    }
}
//Visual Studio Code live server doesn't accept files directly so we need a function to read the text file through a XML Http Request
function readTextFile(file) 
{
    var textfile = new XMLHttpRequest();
    textfile.open("GET", file, false); 
    var text = "";
    textfile.onreadystatechange = function ()
    {
        if(textfile.readyState === 4) // readyState = 4: request finished and response is ready
        {
            if(textfile.status === 200) // status 200: "OK"
            {
                text = textfile.responseText; //Returning the text file data as a string
            }
        }
    }
    textfile.send(null); //Sending the request to the server with a null parameter
    return text; 
}
//SearchList function will search through the string of text and then separate the string by column. The text being passed through is information on the list of cities and their individual pages 
function SearchList()
{
    var searchtxt = document.getElementById("searchBar").value;
   var surl = "";
   var file = "Directory.txt";
   var text = "";

   text = readTextFile(file);
   var rows = text.split('\n');
   for (var i = 0; i < rows.length; i++) //goes through the string line by line
   {
       //split by separator (,) and get the columns
       cols = rows[i].split(',');
       
       if(cols[1] == searchtxt) //If the search text is equal to the city in column 2 of the text then make surl equal the html in column 3
       {
           surl = cols[2];
        }
    }
    if(surl == "") //if the search text is not equal to the surl then redirect the user to an error pop up
    {
        swal({title: "Enter a valid city name!",text: "Please Try Again!",icon: "error",button: "Try Again!"});
        document.getElementById("searchBar").reset();
    }
    else //if the surl is equal to the search text redirect user the correct page
    {
       window.location.href = surl;
    } 
}