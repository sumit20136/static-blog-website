// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();


$(document).ready(function() {
    function animateCounter() {
      $('.counter').each(function() {
        var $this = $(this);
        var target = parseInt($this.text(), 10); // Parse the initial numeric value
        var suffix = $this.data('suffix') || ''; // Get the suffix from data attribute or default to empty string
  
        $this.prop('Counter', 0).animate({
          Counter: target
        }, {
          duration: 4000,
          easing: 'swing',
          step: function(now) {
            // Display the animated numeric value with the suffix
            $this.text(Math.ceil(now) + suffix);
          }
        });
      });
    }
  
    // Call the function to animate counters
    animateCounter();
  });
  

