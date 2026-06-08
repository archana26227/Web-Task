document.getElementById("contactForm").addEventListener("submit" ,function(e){

    e.preventDefault();

    let fullname=document.getElementById("fullname").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let message=document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("phoneError").innerText="";
    document.getElementById("messageError").innerText="";

    let valid=true;

    if(fullname==""){
        document.getElementById("nameError").innerText="Name is required";
        valid=false;
    }

    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        document.getElementById("emailError").innerText="Enter valid email";
        valid=false;
    }

    if(phone.length !=10||isNaN(phone)){
        document.getElementById("phoneError").innerText="Enter 10 digit number";
        valid=false;
    }
    
    if(message==""){
        document.getElementById("messageError").innerText="Message cannot be empty";
        valid=false;
    }

    if(valid){
        alert("Form Submitted Succesfully");
    }
    
});