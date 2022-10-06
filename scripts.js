// We are using an initMap callback function, 
// i.e. JavaScript code only runs once API has finished loading.

function initMap() {
    latitude  = 34.66776250447331
    longitude = 135.4305299471083
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude }, //Latitude and Longitute
      zoom: 18, //Zoom level
      mapId: "7f77d77487053fdf",
      
      //Turning off the default Google Maps option
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
    });

    // Map Markers
    // [Name, Latitude, Longitude, Image URL, scaledSize width, scaledSize height, content]
    const mapMarkers = [
        [
            "Star", //Name
            34.667197761199986, //Lat
            135.43038510783035, //Long
            "star.png", //Image URL
            38, //Scaled Size width
            31, //Scaled Sice height
            "I am a happy star! You can't just see me smiling :)" //infoWindow content
        ],
        [
            "House 1",
            34.666746909158235,
            135.43084990198943,
            "house.png",
            38,
            31,
            "You're tired? Come in! I got a cozy bed for you :)"
        ],
        [
            "House 2",
            34.66858799901298, 135.430257481813,
            "house.png",
            38,
            31,
            "I am planning to change my paint, what color would you suggest?"
        ],
        [
            "Castle",
            34.668260851820065,
            135.43142962744778,
            "castle.png",
            38,
            31,
            "I got treasure inside! But you have to earn it :)"
        ],
         [
            "Citizen 1",
            34.667533466729786,
            135.43197126875197,
            "citizen.png",
            33,
            44,
            "I am so glad you clicked on me! Thank you :)"
        ],
        [
            "Citizen 2",
            34.66670862519206,
            135.43168352180913,
            "citizen.png",
            33,
            44,
            "I lost my muffin, have you seen it?"
        ],
        [
            "Citizen 3",
            34.66866456519072,
            135.43053676561047,
            "citizen.png",
            33,
            44,
            "I have a ghost story for you! You better come for it at night."
        ],
        [
            "Citizen 3",
            34.66866456519072,
            135.43184008999864,
            "citizen.png",
            33,
            44,
            "Why all of the citizens are waiving at you? Are we in a matrix?!"
        ],
        [
            "Flower 1",
            34.66770400256333,
            135.4308202809806,
            "flower.png",
            29,
            21,
            "I am always afraid someone would walk over me :("
        ],
        [
            "Flower 2",
            34.66700097503102, 135.43159889035536,
            "flower.png",
            29,
            21,
            "Please water me everyday! I wanna grow quick :)"
        ],
        [
            "Flower 3",
            34.668107718647605, 135.4322209315406,
            "flower.png",
            29,
            21,
            "I think a bug likes me, what should I do?"
        ],
        [
            "Flower 4",
            34.666760830596125, 135.4295296513105,
            "flower.png",
            29,
            21,
            "I can get mario big!"
        ],
        [
            "Light house",
            34.668236489743386, 135.43111649106882,
            "lighthouse.png",
            25,
            55,
            "I am on duty, don't disturb me!"
        ],
        [
            "Long Hill 1",
            34.66670514483064, 135.43031672383063,
            "long_hill.webp",
            38,
            31,
            "I am looking for my wife, have you seen her?"
        ],
        [
            "Long Hill 2",
            34.666464999538206, 135.43061716549155,
            "long_hill.webp",
            38,
            31,
            "Water is so cold!!"
        ],
        [
            "Pipe 1",
            34.66899519105473, 135.43095569130665,
            "pipe.png",
            29,
            21,
            "Don't tell Mario that he can skip levels if he jump in!"
        ],
        [
            "Pipe 2",
            34.66786061679509, 135.42952118816515,
            "pipe.png",
            29,
            21,
            "I got a cactus inside me, beware!"
        ],
        [
            "Pointer",
            34.666151765502015, 135.4310107017516,
            "pointer.png",
            23,
            40,
            "Here you are on the map!"
        ],
        [
            "Tree Plant 1",
            34.66680607525302, 135.4318866372982,
            "treeplant.png",
            38,
            31,
            "I wanna be a big tree one day!"
        ],
        [
            "Tree Plant 2",
            34.668306095657776, 135.4325679205011,
            "treeplant.png",
            38,
            31,
            "Guess my age!"
        ],
        [
            "Yoshi",
            34.66609259893997, 135.42949579872902,
            "yoshi.png",
            38,
            31,
            "I am late for a date!"
        ],
        [
            "Mario",
            34.668107718647605, 135.43051137617434,
            "mario.png",
            55,
            60,
            "Welcome to my world :)"
        ]
    ];

    //Dropping all the markers onto the map
    for (let i = 0; i < mapMarkers.length; i++){
        const thisMarker = mapMarkers[i];

        // Marker
        const marker = new google.maps.Marker({
        position: {lat: thisMarker[1] , lng: thisMarker[2]},
        map,
        title: thisMarker[0],
        animation: google.maps.Animation.DROP,
        icon: {
            url: thisMarker[3],
            scaledSize: new google.maps.Size(thisMarker[4],thisMarker[5])
        }
        });

        // Info of Marker
        const infowindow = new google.maps.InfoWindow({
        content: thisMarker[6],
        });
        marker.addListener("click", () => {
            infowindow.open(map,marker);
        });
    }
    
  }