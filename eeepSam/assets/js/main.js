// Navbar collapsing
$(".navbar-nav li a").click(function (event) {
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
});