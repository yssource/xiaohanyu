$(document).ready (function () {
  $("table:not([class])").addClass("table table-striped table-hover");
});


$(document).ready(function() {
  /* off-canvas sidebar toggle */
  $('[data-toggle=offcanvas]').click(function() {
  	$(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-arrow-right glyphicon-arrow-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
  });
});