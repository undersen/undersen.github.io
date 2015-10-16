 function init() {

            	var locations = [
      ['<div class="card"><div class="card-image"><img  src="media/c1.jpg"><span class="card-title">Titulo de la Tarjeta</span></div><div class="card-content">Soy una tarjeta muy simple. Soy buena mostrando peque&ntilde;os trozos de informaci&oacute;n. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</div><div class="card-action"><a href="#">Revisar</a></div></div>', -33.4661619, -70.6106321],
      
    ];


    
               var map = new google.maps.Map(document.getElementById('map'), { 
                zoom: 7,
      			center: new google.maps.LatLng(-33.4661619, -70.6106321),
                    styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
                });

var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
                 google.maps.event.addDomListener(window, 'load', init);
                };




