$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// ===========================================================================================================

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// ===========================================================================================================

$(document).ready(function(){
  $("#myInput2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// ===========================================================================================================

$(document).ready(function(){
  $("#updatingBadge").click(function() {
    
  });
})
