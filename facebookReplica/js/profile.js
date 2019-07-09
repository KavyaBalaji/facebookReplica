function getUData(){
    var logUserD = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));
    $("#userCurrJobOrg").html("<i class='fa fa-briefcase' aria-hidden='true' style='margin-right: 10px;'></i> Works as <b>"+logUserD.currentJobRole+"</b> in <b>"+logUserD.currentOrganization+"</b>");
    $("#userColl").html("<i class='fa fa-graduation-cap' aria-hidden='true' style='margin-right: 10px;'></i> Graduated at <b>"+logUserD.college+"</b>");
    $("#userSchool").html("<i class='fa fa-graduation-cap' aria-hidden='true' style='margin-right: 10px;'></i> Studied at <b>"+ logUserD.school+"</b>");
    $("#userCurrCity").html("<i class='fa fa-home' aria-hidden='true' style='margin-right: 10px;'></i> Lives at <b>"+logUserD.currentCity+"</b> from <b>"+logUserD.state+"</b> in <b>"+logUserD.country+"</b>");
    $("#userBcity").html("<i class='fa fa-map-marker' aria-hidden='true' style='margin-right: 10px;'></i> From <b>"+logUserD.birthCity+"</b>");
    $("#userName").html("<b>"+logUserD.username+"</b>");
    $("#loginUserName").html("<b>"+logUserD.username+"</b>");
    $("#timeline2UName").html("<h5>"+logUserD.username+"</h5>");    
    $("#timeline1UName").html("<h5>"+logUserD.username+"</h5>");
    $("#timeLineHeader").html("<h5>"+logUserD.username+"</h5>");
}