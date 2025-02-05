// const typed= new typed(".text1",{
//     strings: ["Frontend Developer", "Blogger", "Android Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:100,
//     loop:true
// })
// document.addEventListener(DOm)
// document.addEventListener('DOMContentLoaded', function() {
 ScrollReveal({ 
    reset: true, 
    distance:'80px',
    duration:1000,
    delay:200
});
 ScrollReveal().reveal('.content1 ,.aboutme,.nonsense,.main-text h2,.contact-text h2', { origin:'top' });
// { origin:'top' }
// ScrollReveal().reveal('.content1', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
// ScrollReveal().reveal('.aboutme', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
// ScrollReveal().reveal('.spa', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
// ScrollReveal().reveal('.main-text h2', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
// ScrollReveal().reveal('.contact-text h2', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });

// document.addEventListener('DOMContentLoaded', function() {
//     ScrollReveal().reveal('.content1', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
//     ScrollReveal().reveal('.aboutme', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
//     ScrollReveal().reveal('.spa', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
//     ScrollReveal().reveal('.main-text h2', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
//     ScrollReveal().reveal('.contact-text h2', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
// });

    // document.getElementById("submitButton").addEventListener("click",function(){
    //      alert("your Response is Submitted");
// //  document.getElementById("hye","he","hey","ehy","submitButton").value="";
  //  });
function validateForm() {
    var name = document.getElementById("hye").value;
    var email = document.getElementById("he").value;
    // var subject = document.getElementById("hey").value;
    var message = document.getElementById("ehy").value;
    // var phoneNumber = event.target.value;
        
    // // Check if the phone number starts with +91 and is 10 digits long
   
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Subject:", subject);
    // console.log("Message:", message);


    if (name.trim === "" || email.trim === ""  || message.trim=== "") {
      alert("Please fill out all fields before submitting.");
      return false; // Prevents the form from submitting
    }

    
alert("Your response is submitted");
    return true; // Allows the form to submit
    
}
function toggleDetails(serviceId) {
    var details = document.getElementById(serviceId + "-details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
document.getElementById('phone').addEventListener('input', function(event) {
    // Get the value of the phone input
    var phoneNumber = event.target.value;
    
    // Check if the phone number starts with +91 and is 10 digits long
    if (!phoneNumber.match(/^\+91\d{10}$/)) {
        event.target.setCustomValidity('Phone number must start with +91 and be 10 digits long.');
    } else {
        event.target.setCustomValidity('');
    }
});

// function validateForm(event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();
    
//     // Hide the contact section fields
//     document.getElementById("contactsection").style.display = "none";
// }

// var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (!emailPattern.(email)) {
//     alert("Please enter a valid email address.");
//     return false; // Prevents the form from submitting
// }v
document.getElementById('hey').addEventListener('input', function(event) {
    // Get the value of the phone input
    var phoneNumber = event.target.value;
    
    // Check if the phone number starts with +91 and is 10 digits long
    if (!phoneNumber.match(/^\+91\d{10}$/)) {
        event.target.setCustomValidity('Phone number must start with +91 and be 10 digits long.');
    } else {
        event.target.setCustomValidity('');
    }
});  


// function sendEmail() {
//     var name = document.getElementById('hye').value;
//     var email = document.getElementById('he').value;
//     var phone = document.getElementById('hey').value;
//     var message = document.getElementById('ehy').value;
    
    // var mailtoLink = 'mailto:samriddhisrivastava@788gmail.com'
    //                 + '?subject=' + encodeURIComponent('New message from ' + name)
//     var data = 'Name: ' + name + '\n'
//     + 'Email: ' + email + '\n'
//     + 'Phone: ' + phone + '\n'
//     + 'Message: ' + message;
    
//       var url = 'mailto:samriddhisrivastava@788gmail.com?subject=' + encodeURIComponent('New message from ' + name) + '&body=' + encodeURIComponent(data);
    
//     navigator.sendBeacon(url);
// }
