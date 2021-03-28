fetch('https://disease.sh/v3/covid-19/all')
    .then((response) =>
    {
        return response.json();
    })
    .then((data) =>
    {
       
      document.getElementById("case").innerHTML = data.cases;
      document.getElementById("deaths").innerHTML = data.deaths;
      document.getElementById("actives").innerHTML = data.active ;
      document.getElementById("recovereds").innerHTML = data.recovered ;
      document.getElementById("test").innerHTML = data.tests;
      document.getElementById("todays").innerHTML = data.todayCases ;
    })
fetch('https://disease.sh/v3/covid-19/states/Louisiana')
    .then((response) =>
    {
        return response.json();
    })
    .then((data) =>
    {
      document.getElementById("state").innerHTML = data.state;
      document.getElementById("cases").innerHTML = data.cases;
      document.getElementById("death").innerHTML = data.deaths;
      document.getElementById("active").innerHTML = data.active ;
      document.getElementById("recovered").innerHTML = data.recovered ;
      document.getElementById("tests").innerHTML = data.tests;
      document.getElementById("today").innerHTML = data.todayCases ;
    })