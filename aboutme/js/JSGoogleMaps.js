function map_init() {
    var var_map;
    var var_location = new google.maps.LatLng(-33.4622399, -70.7012753, 17);

    var var_mapoptions = {
        center: var_location,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        panControl: false,
        rotateControl: false,
        streetViewControl: false
    };
    var_map = new google.maps.Map(document.getElementById("map_canvas"),
        var_mapoptions);

    var contentString =
          '<div id="mapInfo">' +
          '<p><i class="glyphicon glyphicon-pencil"></i><strong>&nbsp;ProgramArte</strong><br>' +
          '<i class="glyphicon glyphicon-home"></i>Lunik 4799 Depto 202,<br>' +
          'Estacion Central<br>' +
          '<i class="glyphicon glyphicon-phone"></i>: (+56) 9 5008 4636</p>' +
          '</div>';

    var var_infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Click para informacion sobre Mi",
        maxWidth: 200,
        maxHeight: 600
    });

    google.maps.event.addListener(var_marker, 'load', function () {
        var_infowindow.open(var_map, var_marker);
    });


    google.maps.event.addDomListener(window, 'load', map_init);


    $('#ModalMaps').on('shown.bs.modal', function () {
        google.maps.event.trigger(var_map, "resize");
        var_map.setCenter(var_location);
    });
}