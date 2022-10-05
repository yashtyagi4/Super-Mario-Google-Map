// We are using an initMap callback function, 
// i.e. JavaScript code only runs once API has finished loading.
var map;
var mapMarker;
function initMap() {
    latitude  = 34.667752404057154
    longitude = 135.4305229640065
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude }, //Latitude and Longitute
      zoom: 18, //Zoom level
      mapId: "7f77d77487053fdf"
    });

    mapMarker = new google.maps.Marker({
        position: {lat: 34.667752404057154, lng: 135.4305229640065},
        map,
        title: "Hello World!",
        // icon: {
        //     url: "star.png",
        //     scaledSize: 
        // }
      });
  }

//   function generateRandomPos(pos) {
//     return Math.floor(Math.random() * (pos + 2 - pos)) + pos;