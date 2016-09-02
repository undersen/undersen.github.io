$( ".animated" ).mouseover(function() {
  $( this ).addClass( "animated rubberBand");
});

$( ".animated" ).mouseleave(function() {
  $( this ).removeClass( "animated rubberBand");
});

$( "a" ).mouseover(function() {
  $( this ).addClass( "animated tada");
});

$( "a" ).mouseleave(function() {
  $( this ).removeClass( "animated tada");

});
