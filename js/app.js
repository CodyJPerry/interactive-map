//Hard coded inital Locations
var initialLocations = [
    {
        name: "Fitness Factory",
        ID: "1",
        address: "214 S Highland Ave",
        cityZip: "Pittsburgh, PA 15206",
        description: "The Fitness Factory is an independent locally owned gym located in Pittsburgh’s ever expanding Shadyside neighborhood. We have been in business and serving the community for more than 20 years. Our fitness philosophy focuses on a combination of strength, cardio and wellness.",
        latlng: { lat: 40.458458, lng: -79.925130 },
        website: "http://fitnessfactorypgh.com/",
        phone: "(412) 362-6303",
        twitter: "FitFactoryPGH",
        twitterLink: "https://twitter.com/FitFactoryPGH?lang=en",
        query: "FitnessFactory"
    },
    {
        name: "MÜV Integrated Physical Culture",
        ID: "2",
        address: "5469 Penn Ave",
        cityZip: "Pittsburgh, PA 15206",
        description: "At MÜV Integrated, we believe that movement and fitness should only be based on the science of the human body. We are confident in our ability to take anyone from a baseline and utilize Strategic Resistance™ manipulation to build postural endurance, strength, conditioning, mobility, speed, and power.",
        latlng: { lat: 40.464666, lng: -79.933382 },
        website: "http://www.muvintegrated.com/",
        phone: "(412) 477-5069",
        twitter: "muvintegrated",
        twitterLink: "https://twitter.com/muvintegrated?lang=en",
        query: "MUV"
    },
    {
        name: "PNC YMCA",
        ID: "3",
        address: "236 Fifth Ave Pittsburgh, PA 15222",
        cityZip: "Pittsburgh, PA 15222",
        description: "Today, the Y engages more than 10,000 neighborhoods across the U.S. As the nation’s leading nonprofit committed tohelping people and communities to learn, grow and thrive, our contributions are both far-reaching and intimate—from influencing our nation’s culture during times of profound social change to the individual support we provide an adult learning to read.",
        latlng: { lat: 40.440763, lng: -80.001168 },
        website: "http://www.ymcaofpittsburgh.org/locations/pnc-ymca/",
        phone: "(412) 471-9622",
        twitter: "PNCYMCA",
        twitterLink: "https://twitter.com/PNCYMCA?lang=en",
        query: "PNCYMCA"
    },
    {
        name: "X Shadyside",
        ID: "4",
        address: "5608 Walnut St Pittsburgh",
        cityZip: "Pittsburgh, PA 15232",
        description: "Since 1994, X Shadyside 24 Hour Health and Fitness has been a leader in providing the most modern fitness solutions in the Shadyside, Squirrel Hill, Oakland, and other East End communities of Pittsburgh. Recognized for our convenient location, contemporary equipment, and strong group exercise program; we are absolutely dedicated to providing our members with the best in fitness!",
        latlng: { lat: 40.451574, lng: -79.931729 },
        website: "http://www.xshadyside.com/",
        phone: "(412) 363-9999",
        twitter: "XShadyside",
        twitterLink: "https://twitter.com/XShadyside?lang=en",
        query: "XShadyside"
    },
    {
        name: "Orangetheory Fitness",
        ID: "5",
        address: "5841 Penn Ave",
        cityZip: "Pittsburgh, PA 15206",
        description: "Orangetheory Fitness offers 60-minute workout sessions split into intervals of cardiovascular and strength training with heart rate monitors to track intensity and maximize metabolic burn. Increase energy, get visible results and burn more calories, even after leaving the studio. That's the Orange Effect!",
        latlng: { lat: 40.462251, lng: -79.927118 },
        website: "http://www.orangetheoryfitness.com/",
        phone: "(412) 362-3616",
        twitter: "OrangeTheoryGVR",
        twitterLink: "https://twitter.com/OrangeTheoryGVR?lang=en",
        query: "OrangetheoryFitness"
    },
    {
        name: "Shape Training",
        ID: "6",
        address: "5877 Commerce St",
        cityZip: "Pittsburgh, PA 15206",
        description: "Our aim is to change the climate of the fitness industry by providing a dynamic, energetic, and comprehensive platform for our clients.",
        latlng: { lat: 40.459523, lng: -79.928313 },
        website: "http://www.shapetrain.com/",
        phone: "(412) 996-5016",
        twitter: "Shapetrain412",
        twitterLink: "https://twitter.com/Shapetrain412?lang=en",
        query: "ShapeTraining"
    },
    {
        name: "Gold’s Gym",
        ID: "7",
        address: "100 Forbes Ave",
        cityZip: "Pittsburgh, PA 15222",
        description: "Get fit with a membership to Gold’s Gym Pittsburgh (Market Square), located in Pittsburgh, PA. With our exceptional health club, you’ll reach your fitness goals in no time, whether you’re aiming to lose weight, flatten your abs or shred upper body muscles. Our world-class fitness experts are always ready to provide workout tips and sound fitness advice. Members at Gold’s Gym Pittsburgh (Market Square) enjoy a state-of-the-art workout facility, top-tier amenities and the best fitness options in the industry.",
        latlng: { lat: 40.440900, lng: -80.003742 },
        website: "http://www.goldsgym.com/",
        phone: "(412) 201-4653",
        twitter: "GoldsGym",
        twitterLink: "https://twitter.com/GoldsGym?lang=en",
        query: "GoldsGym"
    },
    {
        name: "Panthro Fitness",
        ID: "8",
        address: "3117 Penn Ave",
        cityZip: "Pittsburgh, PA 15201",
        description: "Consistent support to answer any question or problem you may have. Lose weight, increase muscle tone and feel more confident than ever! A greater range of motion and joint movement to keep you healthy. Learn about and implement a diet that will transform your physique.",
        latlng: { lat: 40.460252, lng: -79.971044 },
        website: "http://panthrofitness.com/",
        phone: "(412) 391-0100",
        twitter: "PanthroFitness",
        twitterLink: "https://twitter.com/PanthroFitness?lang=en",
        query: "PanthroFitness"
        
    },
    {
       name: "terraFITNESS",
       ID: "9",
       address: "5746 Baum Blvd",
       cityZip: "Pittsburgh, PA 15206",
       description: "Everyone has individual goals, and we will work together to meet them. I talk to each client to understand their strengths, weaknesses and limitations. I then design a personal training program based on this information. I help my clients achieve, maintain, and even exceed what they once thought was impossible.",
       latlng: { lat: 40.458625, lng: -79.931998 },
       website: "http://www.terra-fitness.com/",
       phone: "(412) 901-3645",
       twitter: "terra_fitness",
       twitterLink: "https://twitter.com/terra_fitness/with_replies?lang=en",
       query: "terraFITNESS"
    },
    {
        name: "The Greentree Sportsplex",
        ID: "10",
        address: "600 Iron City Dr",
        cityZip: "Pittsburgh, PA 15220",
        description: "Think about this question for a second… Where can you find a Fitness Center, Basketball/Volleyball Courts, Badminton, 3 giant indoor turf fields that can be used for: (Soccer, Baseball, Softball, Football, Kickball, Lacrosse, Frisbee, etc…), and Indoor Batting Cages and Live Pitching Tunnels. Oh, by the way we also have our own CrossFit Gym section, D1 Sports Performance Training Gym section, Warriors Fitness Kickboxing Gym section, plus a Salsa Dance Studio section. So instead of the question of why should someone want to join our gym, lets rephrase that to “Why shouldn’t someone want to join our gym?”",
        latlng: { lat: 40.420392, lng: -80.058305 },
        website: "https://greentreesportsplex.com/",
        phone: "(412) 922-1818",
        twitter: "TheSportsPlex",
        twitterLink: "https://twitter.com/TheSportsPlex?lang=en",
        query: "Sportsplex"
    }
    
];

//String to display in info window
var content = '';

//Declare Map variable and markers array
var map;

var infoWindow;

var marker;


// tells the view model what to do when a change occurs
function gymLocation(value) {
    this.name = ko.observable(value.name);
    this.address = ko.observable(value.address);
    this.description = ko.observable(value.description);
    this.latlng = ko.observable(value.latlng);
};

//ViewModel
function ViewModel() {
    
    var self = this;
    self.markers = [];

    
    //Copies the values of initialLocations and stores them in sortedLocations(); observableArray
    self.sortedLocations = ko.observableArray(initialLocations);
    
    
    
    //FourSquare API Request | Add location parameter to function definition | Declare variables to be used in API request
    function getFourSquareData(location) {
        var clientID = '54I1UHM3AGCPB45VNROLAC23DEARBPZ3R4C0Y5QX3BDL30SV';
        var clientSecret = 'SCQYO3CFBWVOHBYK4HUMBBXF3VUIF5ETZPD01BXTGBO2YW00';
        var fqVersion = '20130815';
        var fourSqUrl;
        var llLat;
        var llLng;
        var errorMsg;
        var gymContent;
        var resp;
        
            //Build correct URL for API request to Foursquare
            llLat = location.latlng.lat;
            llLng = location.latlng.lng;
            fourSqUrl = 'https://api.foursquare.com/v2/venues/explore' + '?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=' + fqVersion + '&ll=' + llLat + ',' + llLng + '&query=' + location.query + '&limit=50';
            
            //Make ajax call to Foursquare API to get requested Data
            $.ajax({
            url: fourSqUrl,
            datatype: "jsonp",
            success: function(response) {
                resp = response.response.groups[0].items[0].venue;
                
    
                //Build infoWidow content string with data from API Request
                infoWindow.setContent(resp.name + '<br>' + location.phone + '<br>' + resp.location.address + '<br>' + resp.location.city + ', ' + resp.location.state + ' ' + resp.location.postalCode + '<br>'  + '<a href="' + location.website + '">' + location.website + '</a>' + '<br>' + '<a href="' + location.twitterLink + '">' + '@' + location.twitter + '</a>');
                
                infoWindow.open(map, location.marker); //open the info window
                
                
            }, // Error method to be run if request fails
            error: function(fourSqUrl, errorMsg) {
                setTimeout(function() { // Display error after 2 seconds if Request to API fails
                    if (errorMsg) {
                        infoWindow.setContent("I'm sorry, an error has occurred. Please try again later.");
                        infoWindow.open(map, location.marker);
                    }
                }, 2000);
            }
        });
        
        
        
            
    };
    
    
        
    //Adds new markers at each location in the initialLocations Array
    self.sortedLocations().forEach(function(location) {
        marker = new google.maps.Marker({
            position: location.latlng,
            map: map,
            title: location.name,
            icon: 'images/gym.svg',
            animation: google.maps.Animation.DROP
        });
        
        location.marker = marker;

    // attach event listeners to the map markers
    marker.addListener('click', function() {
        getFourSquareData(location); //call function to get foursquare data for this specific location and open infowindow
        if (location.name) {
            location.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        setTimeout(function() {
            location.marker.setAnimation(null);
        }, 2000);
    });
                      
});

    
  infoWindow = new google.maps.InfoWindow();

    
    //Click on item in list view
    self.listViewClick = function(gym) {
        google.maps.event.trigger(gym.marker, 'click'); //Associate the marker with the list view item when clicked
        if (this.name) {
        map.setZoom(15); //Zoom the map
        map.panTo(gym.marker.position);
        gym.marker.setAnimation(google.maps.Animation.BOUNCE); // Cause markers to bounce when clicked
        self.query(this.name); // Populate the search field with current search name 
        } 
        setTimeout(function() {
          gym.marker.setAnimation(null); // End marker animation after 2 seconds 
        }, 2000);
                
}
    
    // Stores user input
    self.query = ko.observable('');
    
        //Store reference to search id
                var search = $("#search");
    
    //When enter is pressed, if names match preform actions in function
            search.change(function() {
                initialLocations.forEach(function(gym) {
                   if (gym.name.toLowerCase() === search.val().toLowerCase()) {
                       map.panTo(gym.latlng);
                       map.setZoom(15);
                       gym.marker.setAnimation(google.maps.Animation.BOUNCE);
                       setTimeout(function() {
                           gym.marker.setAnimation(null);
                       }, 2000);
                       infoWindow.setContent(gym.name + '<br>' + gym.phone + '<br>' + gym.address + '<br>' + gym.cityZip + '<br>' + gym.description + '<br>' + '<a href="' + gym.website + '">' + gym.website + '</a>' + '<br>' + '<a href="' + gym.twitterLink + '">' + '@' + gym.twitter + '</a>');
                       infoWindow.open(map, gym.marker)
                       $('.sidebar').hide();
                   } 
                });
                
                
    });
        
    
       
    //Filter through observableArray and filter results using knockouts utils.arrayFilter();
    self.search = ko.computed(function() {
        return ko.utils.arrayFilter(self.sortedLocations(), function(listResult) {
            //Match search with items in sortedLocations() observable array
            var match = listResult.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;

            if (match) { //If result is true, show correct marker based off users search
                listResult.marker.setVisible(true);
                
            } else {
                listResult.marker.setVisible(false); //hide markers that do not show users search results
            }
            
            return match;
           
        });
        map.setZoom(13);
    });
    
    var bounds = new google.maps.LatLngBounds({ lat: 40.420392, lng: -80.058305 },  { lat: 40.458458, lng: -79.925130 });
    
    //Click event on map to zoom out to original poistion
    map.addListener('click', function(event) {
        infoWindow.close(); //Close all info windows
        infoWindow.setContent(null);
        map.setZoom(13);
        map.panTo({ lat: 40.440624, lng: -79.995888}); //map center location
        self.query('');
        map.fitBounds(bounds);
    });
    
    
   google.maps.event.addDomListener(window, 'resize', function() {
       map.setCenter({lat: 40.440624, lng: -79.995888});
       map.fitBounds(bounds);
   });
    
  google.maps.event.addDomListener(window, 'load', function() {
      map.setCenter({lat: 40.440624, lng: -79.995888});
      map.fitBounds(bounds);
  });
    
};


//Create Instance of a map from the Google maps api
//Grab the reference to the "map" id to display map
//Set the map options object properties 
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 40.440624, lng: -79.995888},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });
    
    
    ko.applyBindings(ViewModel());
};

    
   








    