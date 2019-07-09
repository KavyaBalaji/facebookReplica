function loadEditData(){

    var logUserD = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));

var username=logUserD.username;
var email= logUserD.email;
var birthCity= logUserD.birthCity;
var currentCity= logUserD.currentCity;
var state= logUserD.state;
var country= logUserD.country;
var currentJobRole= logUserD.currentJobRole;
var currentOrganization= logUserD.currentOrganization;
var college = logUserD.college;
var school= logUserD.school;

$('.div').text(username);
   $('.from').text(birthCity);
    $('.live').text(currentCity);
    $('.country').text(', '+country);
    $('.jobrole').text(currentJobRole);
    $('.organization').text(currentOrganization);
    $('.school').text(school);
    $('.college').text(college);

$('#username').val(username);
$('#birthcity').val(birthCity);
$('#currentcity').val(currentCity);
$('#state').val(state);
$('#country').val(country);
$('#editCurrentJobRole').val(currentJobRole);
$('#editCurrentOrganization').val(currentOrganization);
$('#school').val(school);
$('#college').val(college);
$('#emailid').val(email);
$("#editUName").html(username);

//alert('Profile Updated Successfully!!!');
//window.location.href="index.html";
}

function job(){
var logUserD = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));
var username=logUserD.username;
var email= logUserD.email;
var birthCity= logUserD.birthCity;
var currentCity= logUserD.currentCity;
var state= logUserD.state;
var country= logUserD.country;
var currentJobRole= logUserD.currentJobRole;
var currentOrganization= logUserD.currentOrganization;
var college = logUserD.college;
var school= logUserD.school;

   var res = JSON.stringify({
            username    : username,
            email  : email,
            birthCity    : birthCity,
            currentCity  : currentCity,
            state    : state,
            country  : country,
            currentJobRole    : document.getElementById("editCurrentJobRole").value,
            currentOrganization  : document.getElementById("editCurrentOrganization").value,
            school    : school,
            college  : college,
   });
   //alert(res);
   sessionStorage.setItem("loggedInUserDetails", res);
   alert('Profile Updated Successfully!!!');
   window.location.href="profile.html";
   
   
   }
   
   function education(){
    var logUserD = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));
var username=logUserD.username;
var email= logUserD.email;
var birthCity= logUserD.birthCity;
var currentCity= logUserD.currentCity;
var state= logUserD.state;
var country= logUserD.country;
var currentJobRole= logUserD.currentJobRole;
var currentOrganization= logUserD.currentOrganization;
var college = logUserD.college;
var school= logUserD.school;

   var res = JSON.stringify({
            username    : username,
            email  : email,
            birthCity    : birthCity,
            currentCity  : currentCity,
            state    : state,
            country  : country,
            currentJobRole    : currentJobRole,
            currentOrganization  : currentOrganization,
            school    : document.getElementById("school").value,
            college  : document.getElementById("college").value,
   });
   //alert(res);
   sessionStorage.setItem("loggedInUserDetails", res);
   alert('Profile Updated Successfully!!!');
   window.location.href="profile.html";
     
   }
   
   function personal(){

var logUserD = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));
var username=logUserD.username;
var email= logUserD.email;
var birthCity= logUserD.birthCity;
var currentCity= logUserD.currentCity;
var state= logUserD.state;
var country= logUserD.country;
var currentJobRole= logUserD.currentJobRole;
var currentOrganization= logUserD.currentOrganization;
var college = logUserD.college;
var school= logUserD.school;

   var res = JSON.stringify({
            username    : document.getElementById("username").value,
            email  : email,
            birthCity    : document.getElementById("birthcity").value,
            currentCity  : document.getElementById("currentcity").value,
            state    : document.getElementById("state").value,
            country  : document.getElementById("country").value,
            currentJobRole    : currentJobRole,
            currentOrganization  : currentOrganization,
            school    : school,
            college  : college,
   });
   //alert(res);
   sessionStorage.setItem("loggedInUserDetails", res);
   alert('Profile Updated Successfully!!!');
   window.location.href="profile.html";
   }   
   
