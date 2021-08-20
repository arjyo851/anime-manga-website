burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
      rightNav.classList.toggle('v-class-resp');
      navList.classList.toggle('v-class-resp');
      navbar.classList.toggle('h-nav-resp');
})

function fillDetails(){
  var name = document.getElementById("name").value;
  var email;
  var phone;
  var text;
  if (name === "Arjyo") {
        email = "arjyo77@gmail.com";
        phone = "9310304682";
        text = "Thank you for writing my name";
  }
  else{
        email = "";
        phone = "";
        text = "";
  }
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  document.getElementById("text").value = text;
}

function checkForName(){
      if(document.getElementById("name").value.length === 0){
            alert("Please enter your name");
            document.getElementById("name").focus();
            return false;
      }
      else if(document.getElementById("phone").value.length === 0 ){
            alert("Please enter your phone number");
            document.getElementById("phone").focus();
            return false;
      }
      else if (document.getElementById("phone").value.length > 13) {
            alert("Check your phone number");
            return false;
      }
      else if(document.getElementById("email").value.length === 0){
            alert("Please enter your email");
            document.getElementById("email").focus();
            return false;
      }
}