$(document).ready(function() {
        $("button#portrait").click(function() {
          $(".row1").show();
          $(".row3").hide();
        });
  });

  $(document).ready(function() {
      $("button#wedding").click(function() {
        $(".row2").show();
        $(".row1").hide();
      });
  });
  $(document).ready(function() {
      $("button#nature").click(function() {
        $(".row3").show();
        $(".row2").hide();
      });
  });



/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
  }
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
function thankYou(){
    alert("Thank you ,We appreciate your feedback!");
}
$(function(){
  $("#mySidepanel a").on("click", function(){
    $("#mySidepanel").width(0);

  });
});
// toggle booking details
// Business logic
$(function(){
  $("#booking").submit(function(e){
    e.preventDefault();
    var inputedMail=$("form.myform input#mail").val();
    var inputedName=$("form.myform input#name").val();
    var inputedPhone=$("form.myform input#phone").val();
    var inputedEvent=$(".service option:selected").val();
    var inputtedDate=$("form.myform input#date").val();
    var inputtedTime=$("form.myform input#time").val();
    var Booking = (e, n, p, s, d, t, ) => {
      return {e,n,p,s, d, t};
  };
  var newBooking = Booking(inputedMail, inputedName,inputedPhone,inputedEvent, inputtedDate,inputtedTime);
  $('.imageShow').hide("slow");;
  $('.showBooking').text(" ");
        $(".showBooking").append("<br>"+"Dear" +"<p>"+"<strong>"+ newBooking.n+"</strong>"+ "Your Booking for "+"<strong>"+ newBooking.s+"</strong>"+" Photography Service on "
        +"<em>"+ newBooking.d+"</em>"+" at "+"<em>"+ newBooking.t+" hrs. "+"</em>"+ "has been confirmed."+ "<br>"+ "<br>"+"<br>"+ "Email : "+"<strong>"+ newBooking.e+"</strong>"+"&nbsp"+"&nbsp"+
        "<br>"+"Phone Number :"+"<strong>"+ newBooking.p+"</strong>"+ "</p>"+ "<br>"  +"<a href = 'index.html'>"+"<i class='fa fa-refresh'>"+"</i>"+"</a>"+ "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
  });
});
//top to bottom button
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}
