let id_1 = document.getElementById("id");
let fst_name = document.getElementById("first_name");
let lst_name = document.getElementById("last_name");
let Email_1 = document.getElementById("email");
let image_1 = document.getElementById("image");
var main_data;


var name1 = document.getElementById("name");
var population = document.getElementById("population");
var region = document.getElementById("region");
var sub_region = document.getElementById("sub-region");
var timeStamp = document.getElementById("time");
let image_2 = document.getElementById("image1");
var data1;


var emp1_fst = document.getElementById("emp1_fst");
var email1 = document.getElementById("email1");
var DOB = document.getElementById("DOB");
var Address = document.getElementById("address");
var salary = document.getElementById("salary");
let image_3 = document.getElementById("image2");
var data2;


async function api1(){
    await fetch("https://reqres.in/api/users?page=2").then((res) => res.json()).then((res) =>res.data).then((res) =>{
        console.log(res);
        id_1.innerHTML="id : "+res[0].id;
        fst_name.innerHTML="First_name : "+res[0].first_name;
        lst_name.innerHTML="Last_name : " +res[0].last_name;
        Email_1.innerHTML="Email : "+res[0].email;
        image_1.setAttribute("src",res[0].avatar)
    
    }).catch((e) =>{
        console.log("error");
    });

  await  fetch("https://restcountries.com/v3.1/name/aruba?fullText=true").then((res1) => res1.json()).then((res1) =>{
        console.log(res1);
        name1.innerHTML = "Name of the Countries is : "+res1[0].name.common;
        population.innerHTML = "Capitail : "+res1[0].capital ;
        region.innerHTML = "Continents : " +res1[0].continents;
        sub_region.innerHTML = "currencies : "+res1[0].currencies.AWG.name;
        timeStamp.innerHTML = "timezones : "+res1[0].timezones;
        image_2.setAttribute("src",res1[0].coatOfArms.png);
    }).catch((e) =>{
        console.log("error");
    });

   await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001").then((res2) => res2.json()).then((res2) =>{
        console.log(res2);
        emp1_fst.innerHTML = "Employee Name : "+res2[0].firstName;
        email1.innerHTML = "Email : "+res2[0].email;
        DOB.innerHTML = "Date Of Birth : "+res2[0].dob;
        Address.innerHTML = "Address : "+res2[0].address;
        salary.innerHTML = "Salary : "+res2[0].salary;
        image_3.setAttribute("src",res2[0].imageUrl);
    }).catch((e) =>{
        console.log("Error");
    });

}

api1();

