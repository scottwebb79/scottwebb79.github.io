      function openForm() {
        document.getElementById("loginPopup").style.display="block";
      }
      
      function closeForm() {
        document.getElementById("loginPopup").style.display= "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        var modal = document.getElementById('loginPopup');
        if (event.target == modal) {
          closeForm();
        }
      }