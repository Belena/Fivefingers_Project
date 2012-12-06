var map;
var latitude=53.3489;
var longitude=-6.2432;

window.onload=initAll;

function initAll() {
  initialize()
  }
	
function initialize() {    
      // Change coordinates into a location 
      var yourLocation = new google.maps.LatLng(latitude, longitude);
      //Setup map and position on map
    	var myOptions = {
        	zoom: 16,
        	mapTypeId: google.maps.MapTypeId.ROADMAP,
        	center: yourLocation
    	}
    	map = new google.maps.Map(document.getElementById("map"), myOptions);

		// To add the marker to the map set it up then call setMap();
		var marker = new google.maps.Marker({
		    position: yourLocation,
		    title:"Vimram Company"
		});
			
		marker.setMap(map);
		
}