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
    $("#mySidepanel").hide(10000);

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
  $('.imageShow').hide();
  $('.showBooking').text(" ");
        $(".showBooking").append("<br>"+"Dear" +"<p>"+"<strong>"+ newBooking.n+"</strong>"+ "Your Booking for "+"<strong>"+ newBooking.s+"</strong>"+" Photography Service on "
        + newBooking.d+" at "+ newBooking.t+" hrs. has been confirmed."+ "<br>"+ "<br>"+"<br>"+ "Email : "+ newBooking.e+"&nbsp"+"&nbsp"+
        "<br>"+"Phone Number :"+ newBooking.p+ "</p>"+ "<br>"  + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
  });
});
