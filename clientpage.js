function changePassword() {
    window.location.href = "changepswd.html"; 
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


function loadProjectPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("myDropdown").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "addaproject.html", true);
    xhttp.send();
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }