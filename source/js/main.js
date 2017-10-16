//////////////////////////////////////
// Navigation colapse
//////////////////////////////////////
function toggleMainNav(){
	document.getElementById("mainNav").classList.toggle('active');
}

//////////////////////////////////////
// Slider
//////////////////////////////////////
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " w3-white";
}

//////////////////////////////////////
// Contact form
//////////////////////////////////////

function checkName(name){
  var Text = /^[a-z A-Z]+$/;
  if(!name.value.match(Text)){
    name.style.border = "2px solid red";
    name.value = "";
  }else{
    name.style.border = "2px solid green";
  }
}

function checkEmail(email){
  var emailText = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(!email.value.match(emailText)) {
    email.style.border = "2px solid red";
  }else{
    email.style.border = "2px solid green";
  }
}


$(document).ready(function() {

    $('#contact-form').submit(function(event) {



        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'message'    : $('textarea[name=message]').val()
        };
            

        $.ajax({
            type        : 'POST', 
            url         : 'www.slicestic.com/api/v1/fe-dev',
            data        : formData,
            dataType    : 'json'
        })

            .done(function() {
                alert('Poruka je poslana.');
            })
            
            .fail(function() {
                alert('Došlo je do greške, pokušajte ponovo.');
            });

        event.preventDefault();
    });

});