(function () {
    var button = document.getElementById('toggle-menu');
    
    button.addEventListener('click', function(event) { 
    event.preventDefault();
    var x = document.getElementById("menu-dropdown");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      
    }
    });
   })();
   
   var images=document.getElementsByClassName("image-work");
   
   
   for(var i=0 ; i<images.length;i++)
   {
   images[i].addEventListener("mouseover",function(event) { 
    this.style.opacity=0.4;
});

images[i].addEventListener("mouseout",function(event) { 
  this.style.opacity=1;
});


   }

   document.getElementById("toggleSwitch").onclick = function() {
    myFunction()
  };

  function myFunction() {
    var element = document.body;
   element.classList.toggle("dark-mode");

  }


 function checkName(name)
 {
   if(name.length>3 && name.length<10)
     {
       
         return true;
     }
     else
      return false;
 }
 
 function checkEmail(name)
{  
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(name).search (filter) != -1;
} 

function checkMessage(message)
{    
    if(message.length>20)
     return true;
     else
     return false;
}

 function validation(event )
{   

   
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var message=document.getElementById("message");
    name.removeAttribute("class","valid-class invalid-class");
    email.removeAttribute("class","valid-class invalid-class");
    email.removeAttribute("class","valid-class invalid-class");
    if(checkName(name.value))
     {
        name.className += " valid-class ";
       
        
     }
     else
     {
      name.className += " invalid-class ";
      name.value="Enter valid input ";
      
     }

     if(checkEmail(email.value))
     {
      email.className += " valid-class ";
      
     }
     else
     {
      email.className += " invalid-class ";
      email.value="Enter valid input ";
     }

     if(checkMessage(message.value))
     {
      message.className += " valid-class ";
     }
     else
     {
      message.className += " invalid-class ";
      message.value="Enter valid input ";
     }
     

}