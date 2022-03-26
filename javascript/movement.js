//AjaX Code
function Fetch()
{
    //create XMLHTTPRequest
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            console.log(this.responseText);
            var flagsContainer = document.getElementById("flags");
            var obj = JSON.parse(this.responseText);
            var arr = obj["data"];
            for(var i =0 ; i<arr.length ; i++)
            {
                flagsContainer.innerHTML += "<div class='content'>"+"<img src="+arr[i]["logo"]+">"+"<br>"+
                "<p>"+"("+arr[i]["short_code"]+")"+"</p>"+"</div>";
            }
        }
    }
    xmlHTTP.open("GET","https://app.sportdataapi.com/api/v1/soccer/teams?apikey=f9dd8fe0-9f27-11ec-8cb3-1f3aae00b9a6&country_id=42" , true);
    xmlHTTP.send();
}
Fetch();

// horizontal slider
var rightbtn = document.getElementById('right');
var leftbtn = document.getElementById('left');
var contentToSrcoll = document.querySelector('.match_content');
rightbtn.onclick = function(){
    // console.log(contentToSrcoll);
    scrollContent(contentToSrcoll,'right', 200 , 100 , 255 );
};
leftbtn.onclick = function(){
    scrollContent(contentToSrcoll,'left', 200 , 100 , 255 );
};

var scrollAomunt = 0;
function scrollContent(container , direction , speed , distance ,step)
{
    var time =setInterval(function(){
    if(direction == 'left')
    {
        container.scrollLeft += step;
    } 
    if(direction == 'right')
    {
        container.scrollLeft -= step;
    }
    scrollAomunt += step;
    if(scrollAomunt >= distance)
    {
        window.clearInterval(time);
    }
    },speed);
}

/*  Dropdown Menu  */

var navBar = document.getElementById("nav");
navBar.style.display="none";
function showMenu(){
    if(navBar.style.display=="none")
    {
        navBar.style.display="block"
    }
    else{
        navBar.style.display="none";
    }
}
setInterval(function(){
    if(window.innerWidth > 990 ){
    navBar.style.display="block";
}
},1000);
console.log(window.innerWidth);
var d =new Date();
var d1 = new Date('2022-03-23');
var days =Math.round((d1.getTime()-d.getTime())/(1000*60*60*24));
console.log(days);