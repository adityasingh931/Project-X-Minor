    // side-bar 2
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
  
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
      }
      // profile
      function openNav1() {
        document.getElementById("mySidenav2").style.width = "100%";
      }
  
      function closeNav1() {
        document.getElementById("mySidenav2").style.width = "0";
      }
  
      // more option in sidenav2
      $(document).ready(function () {
        $("#moreclick").slideUp();
        $("#more").click(function () {
          $("#moreclick").slideToggle();
        });
      });