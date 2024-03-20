// If you want the dropdown to open on click instead of hover
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll('.navbar .dropdown');
    
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
        this.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
  });
  