//Ajax Code
function Fetch()
{
    //create XMLHTTPRequest
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            var obj = JSON.parse(this.responseText);
            var arr = obj["data"];
            var arr2 = [];
            console.log(arr);
            for(var i = 0 ; i < arr.length ; i++)
            {
                var dateOfMatch = new Date(arr[i]["match_start"]);
                var dateNow = new Date();
                if(Math.floor((dateOfMatch.getTime()-dateNow.getTime())/(1000*60*60*24)) > 0 && Math.round(dateOfMatch.getTime()-dateNow.getTime())/(1000*60*60*24) < 10 )
                {
                    console.log((dateOfMatch.getTime()-dateNow.getTime())/(1000*60*60*24));
                    var home = document.getElementById("home");
                    var result = document.getElementById("result");
                    var away = document.getElementById("away");
                    home.innerHTML +=
                    `
                    <div class="upcoming_img"> <img src ='${arr[i]["home_team"]["logo"]}'> </div>
                    <div> <p> ${arr[i]["home_team"]["name"]} </p> <div>
                    `;
                    result.innerHTML+=
                    `
                    <div> <span> - </span> &nbsp; &nbsp; &nbsp; &nbsp; <span> - </span> </div>
                    <div> <p> ${arr[i]["match_start"]} </p></div>
                    `;
                    away.innerHTML+=
                    `
                    <div class="upcoming_img"> <img src ='${arr[i]["away_team"]["logo"]}'> </div>
                    <div> <p> ${arr[i]["away_team"]["name"]} </p> <div>
                    `;
                }
            }
        }
    }
    xmlHTTP.open("GET","https://app.sportdataapi.com/api/v1/soccer/matches?apikey=f9dd8fe0-9f27-11ec-8cb3-1f3aae00b9a6&season_id=1980&date_from=2020-09-19" , true);
    xmlHTTP.send();
}
Fetch();