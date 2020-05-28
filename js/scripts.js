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
