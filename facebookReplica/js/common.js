function saveActiveLog(ip){
    var logArr = [];

   var loggedUserData = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));
   var logUserD = JSON.parse(loggedUserData);
   var today = new Date();
   var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' at '+time;
   
var date = new Date();
weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dateLog = date.getDate() + ' ' + weekday[date.getDay()] + ' ' + date.toLocaleTimeString();
    if(ip="userLogIn"){
        var logDet = logUserD.username+" has logged in at "+dateTime;

    }
}

function logout(){
    sessionStorage.removeItem("loggedInUserDetails");
    sessionStorage.clear();
    document.location.href = "login.html";
    
  }