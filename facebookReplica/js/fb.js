function getAllUsers(){
    var getAllUsers = localStorage.getItem("usersDetails");
    if(getAllUsers == null){
        var userArr=[{username:"Ram", email:"ram@gmail.com", password:"ram@123", birthCity:"Coimbatore", currentCity:"Mumbai", state:"Maharastra", country:"India", currentJobRole:"UI Developer", currentOrganization:"ABC Pvt Ltd", college:"St.Peters College Of Arts and Science", school:"St. John's School"},
    {username:"Raghu",email:"raghu@gmail.com", password:"raghu@123", birthCity:"Madurai", currentCity:"Chennai", state:"Tamil Nadu", country:"India", currentJobRole:"Software engineer", currentOrganization:"Tata Consultancy Services", college:"St.Joseph's College Of Engineering", school:"RMS Matriculation Higher Secondary School"},
    {username:"Ravi",email:"ravi@gmail.com", password:"ravi@123", birthCity:"Delhi", currentCity:"Dallas", state:"Texas", country:"USA", currentJobRole:"Senior Developer", currentOrganization:"WalMart", college:"RRC College", school:"MCC School"},
    {username:"Madhu",email:"madhu@gmail.com", password:"madhu@123", birthCity:"Kanpur", currentCity:"Mumbai", state:"Maharastra", country:"India", currentJobRole:"Research Scholar", currentOrganization:"IIT", college:"IIT Delhi", school:"St.Bede's School"},
    {username:"Sita",email:"sita@gmail.com", password:"sita@123", birthCity:"Banglore", currentCity:"Delhi", state:"Delhi", country:"India", currentJobRole:"Architect", currentOrganization:"Marg Properties", college:"RKM College", school:"St John's School"},
    {username:"Vimal",email:"vimal@gmail.com", password:"vimal@123", birthCity:"Chennai", currentCity:"bihar", state:"Orissa", country:"India", currentJobRole:"CEO", currentOrganization:"RR Companies", college:"SSR Coolege", school:"St.Ebbas School"},
    {username:"Guna",email:"guna@gmail.com", password:"guna@123", birthCity:"Jaipur", currentCity:"Noida", state:"Gurgaon", country:"India", currentJobRole:"Team Lead", currentOrganization:"Awata Software Services", college:"Ethiraj College", school:"Vel's School"},
    {username:"Rahul",email:"rahul@gmail.com", password:"rahul@123", birthCity:"Mumbai", currentCity:"Pune", state:"Maharastra", country:"India", currentJobRole:"Designer", currentOrganization:"KK Fashions", college:"NIFT Chennai", school:"Montfort School"},
    {username:"Bindhu",email:"bindhu@gmail.com", password:"bindhu@123", birthCity:"Kolkata", currentCity:"Hyderabad", state:"AP", country:"India", currentJobRole:"Agriculture", currentOrganization:"Dept Of Agri", college:"Agricultural College", school:"Santhome School"},
    {username:"Ramesh",email:"ramesh@gmail.com", password:"ramesh@123", birthCity:"Hosur", currentCity:"Kadapa", state:"AP", country:"India", currentJobRole:"Dotor", currentOrganization:"KBC hospital", college:"MMC Chennai", school:"Raphel's School"}];
    
    localStorage.setItem("usersDetails",JSON.stringify(userArr));
    }
    
}
var userDetailsArr = [];
function getUserDetails(){
    var getAllUDetails =JSON.parse(localStorage.getItem("usersDetails"));
    console.log(getAllUDetails);
    var j=0;
    var flag = 0;
    var emailId = $("#email").val();
    var pwd = $("#pwd").val();

    for(var i=0;i<getAllUDetails.length;i++){
        j++;
        if(getAllUDetails[i].email == emailId && getAllUDetails[i].password == pwd){
             flag = 1;
            var myObj = JSON.stringify({
                username : getAllUDetails[i].username,
                email : getAllUDetails[i].email,
                password : getAllUDetails[i].password,
                birthCity : getAllUDetails[i].birthCity,
                currentCity : getAllUDetails[i].currentCity,
                state : getAllUDetails[i].state,
                country : getAllUDetails[i].country,
                currentJobRole : getAllUDetails[i].currentJobRole,
                currentOrganization : getAllUDetails[i].currentOrganization,
                college : getAllUDetails[i].college,
                school : getAllUDetails[i].school

            });
            userDetailsArr.push(myObj);
            sessionStorage.setItem("loggedInUserDetails", userDetailsArr);
            var userLogIn = "userLogin";
            //saveActiveLog(userLogIn);
            document.location.href = "profile.html";
            
            break;
        }else{
            if(j==getAllUDetails.length){
                alert("invalid username and password");
            }
        }

    }
    if(flag ==1){
    }
}

