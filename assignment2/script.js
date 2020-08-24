document.querySelector("#register-btn").addEventListener('click',addRows);
document.querySelector('#FirstName').addEventListener('keypress',getData);
document.querySelector('#LastName').addEventListener('keypress',getData);
document.querySelector('#emailId').addEventListener('keypress',getData);
document.querySelector('#emailId').addEventListener('keypress',ValidateEmail);
document.querySelector('#mobileNumber').addEventListener('keypress',getData);
document.querySelector('#address').addEventListener('keypress',getData);
document.querySelector("#FirstName").addEventListener('keydown',validateName);
document.querySelector("#LastName").addEventListener('keydown',validateName);


let numberArr = [];
let emailArr = [];
let fNameArr = [];
let lNameArr = [];
let addressArr = [];
let x = 0;

function disp(e) {
    var sec1=document.getElementById("carouselExampleIndicators");
    var sec2=document.getElementById("registerBlock");
    var sec3=document.getElementById("showListBlock");
    var sec4=document.getElementById("aboutDiv");
    console.log(e);
      if (e=='home') 
      {
        sec1.style.display="block";
        sec2.style.display="none";
        sec3.style.display="none";  
        sec4.style.display="none";
      }
      else if(e == 'register')
      {
          sec2.style.display="block";
          sec1.style.display="none";  
          sec3.style.display="none";
          sec4.style.display="none";
             
      }
      else if(e == 'showList')
      {
          sec3.style.display="block";
          sec1.style.display="none";  
          sec2.style.display="none";
          sec4.style.display="none";
        
      }

      else if(e == 'aboutUs'){
          sec4.style.display="block";
          sec1.style.display="none";  
          sec2.style.display="none";
          sec3.style.display="none";
      }
}

function getData(e){
  if (e.keyCode != 13 || fName.length<3 && number.length!=10 && email.length<13 )
        return;
}

function addRows(){
    var flag = 0;
    var fName = document.getElementById('FirstName').value;
    var lName = document.getElementById('LastName').value;
    var email = document.getElementById('emailId').value;
    var number = document.getElementById('mobileNumber').value;
    var address = document.getElementById('address').value;
    var gender=document.querySelectorAll('input[type="radio"]');
    var events=document.querySelectorAll('input[type="checkbox"]');

    var table = document.getElementById("registrantList");
    
    let selectedValue;
         for (const gen of gender) {
             if (gen.checked) {
               selectedValue = gen.id;
             break
        }
     }

    if(fName.length<3)
      alert("Enter Valid First Name...!!!");
    else if (lName.length<3) {
      alert("Enter Valid Last Name...!!!");
    }
    else if (number.length!=10) {
      alert("Enter Valid  number..!!!");
    }
    else if (email.length<13) {
      alert("Enter Valid Email...!!!");
    }
    else if (address .length<10) {
      alert("Enter Valid Address ..!!!");
    }
    else
    {  
    document.getElementById('noData').style.display = 'none';
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6=  row.insertCell(5);
    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = email;
    cell4.innerHTML = number;
    cell5.innerHTML = address;
    cell6.innerHTML=selectedValue;

    
        
    table.appendChild(row);
    alert("Registered Successfully!!!");
    flag = 1;
    }
    if(flag == 1){
      document.getElementById('FirstName').value = '';
      document.getElementById('LastName').value = '';
      document.getElementById('emailId').value = '';
      document.getElementById('mobileNumber').value = '';
      document.getElementById('address').value = '';
    }
}


function validateName(e){

if (e.ctrlKey || e.altKey) {
    
      e.preventDefault();
      
    } else {
    
      var key = e.keyCode;
      
      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
      
        e.preventDefault();
        
      }

    }
}


//validate email address. Reference email - abc@gmail.com
function ValidateEmail() {
      var email = document.getElementById("emailId").value;
      var expr = /^[ [\w\.=-]+@([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4})(\]?){2,3}$/;
      if (!expr.test(email)) {
        alert("Invalid email address.");
        document.getElementById("emailId").value = '';
  }
}

function validate(evt) {
  var key = evt.keyCode;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    evt.returnValue = false;
  }
}



