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

document.getElementById("explorebtn").addEventListener("click",function (e){

    e.preventDefault();
    document.getElementById("section-card")
    .scrollBy({
        left:400,
        behavior:"smooth",
    });
    
});

let stories=document.getElementById("stories");

setInterval(function(){
    if(stories.scrollLeft+stories.clientWidth>=stories.scrollWidth-10){
        stories.scrollTo({
            left:0,
            behavior:"smooth",
        });
    }else{
        stories.scrollBy({
            left:370,
            behavior:"smooth",
        });
    }
},1000);

let cards=document.getElementById("section-card");

setInterval(function(){
    if(cards.scrollLeft+cards.clientWidth>=cards.scrollWidth-10){
        cards.scrollTo({
            left:0,
            behavior:"smooth",
        });
    }else{
        cards.scrollBy({
            left:370,
            behavior:"smooth",
        });
    }
},2000);