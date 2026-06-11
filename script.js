// contact form validation and whatsapp page 
document.getElementById("contactForm").addEventListener("submit" ,function(e){

    e.preventDefault();

    let fullname=document.getElementById("fullname").value.trim();  //trim is used to avoid the spaces
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let message=document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText="";    //innertext is used to get and change the element by accessing it from the html file
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
    if (valid){
        e.preventDefault();

    let name=document.getElementById("fullname").value;
    let email=document.getElementById("email").value;     //value is used to get the data that user will enter
    let phone=document.getElementById("phone").value;
    let message=
    `Hello Lumina Dental,
    
    Name: ${name}
    email: ${email}
    phone: ${phone}
    
I would like to book an Appointment.`;

    let whatsappURL="https://wa.me/918830101455?text=" +
    encodeURIComponent(message);

    window.open(whatsappURL,"_blank");   //_blank is used to open a new tab instead of opening in a current tab
    }
});
    
// only whatsapp page code
// document.getElementById("contactForm").addEventListener("submit",function(e){

//     e.preventDefault();

//     let name=document.getElementById("fullname").value;
//     let email=document.getElementById("email").value;
//     let phone=document.getElementById("phone").value;
//     let message=
//     `Hello Lumina Dental,
    
//     Name: ${name}
//     email: ${email}
//     phone: ${phone}
    
// I would like to book an Appointment.`;

//     let whatsappURL="https://wa.me/918830101455?text=" +
//     encodeURIComponent(message);

//     window.open(whatsappURL,"_blank");
// });


// button to scroll left when we click on it that is for the cards
document.getElementById("explorebtn").addEventListener("click",function (e){

    e.preventDefault();       //this is used to make the browser stop doing of your own and only run the javascript code
    document.getElementById("section-card")
    .scrollBy({
        left:400,
        behavior:"smooth",
    });
    
});

// for left and right scroll button for the rating box
// let stories=document.getElementById("stories");

// setInterval(function(){
//     if(stories.scrollLeft+stories.clientWidth>=stories.scrollWidth-10){
//         stories.scrollTo({
//             left:0,
//             behavior:"smooth",
//         });
//     }else{
//         stories.scrollBy({
//             left:370,
//             behavior:"smooth",
//         });
//     }
// },1000);

// let cards=document.getElementById("section-card");

// setInterval(function(){
//     if(cards.scrollLeft+cards.clientWidth>=cards.scrollWidth-10){
//         cards.scrollTo({
//             left:0,
//             behavior:"smooth",
//         });
//     }else{
//         cards.scrollBy({
//             left:370,
//             behavior:"smooth",
//         });
//     }
// },2000);

// this code is used to make the cards auto scroll without scrolling 
function animate(){
    let cards=document.getElementById("section-card");
    cards.scrollLeft+=1;
    if(cards.scrollLeft>=cards.scrollWidth/2){
        cards.scrollLeft=0;
    }
    requestAnimationFrame(animate);
}
animate();

let stories=document.getElementById("stories");
function slide(){
    stories.scrollLeft+=1;
    if(stories.scrollLeft>=stories.scrollWidth/2){
        stories.scrollLeft=0;
    }
    requestAnimationFrame(slide);       //this is used to move the cards without waiting 
}
slide();    


let themeToggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")=="dark"){
    document.body.classList.add("dark-mode");
    themeToggle.innerText="☀️";
}

themeToggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme","dark");
    themeToggle.innerText="☀️";
}
else{
    localStorage.setItem("theme","light");
    themeToggle.innerText="🌙";
}
});

