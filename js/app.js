//Hard coded inital Locations
var initialLocations = [
    {
        name: "Fitness Factory",
        ID: "1",
        address: "214 S Highland Ave, Pittsburgh, PA",
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
        address: "5469 Penn Ave Pittsburgh, PA 15206",
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
        address: "5608 Walnut St Pittsburgh, PA 15232",
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
        address: "5841 Penn Ave Pittsburgh, PA 15206",
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
        address: "5877 Commerce St Pittsburgh, PA 15206",
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
        address: "100 Forbes Ave Pittsburgh, PA 15222",
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
        address: "3117 Penn Ave Pittsburgh, PA 15201",
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
       address: "5746 Baum Blvd Pittsburgh, PA 15206",
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
        address: "600 Iron City Dr Pittsburgh, PA 15220",
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
};

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

        //Pushes each marker into the markers array
        this.markers.push(marker);
    });
    
    //Map info windows to each item in the markers array
    self.markers.map(function(info) {
            infoWindow = new google.maps.InfoWindow({
                content: content
            });
        //Add click event to each marker to open info window
        info.addListener('click', function() {
                infoWindow.open(map, this),
                info.setAnimation(google.maps.Animation.BOUNCE), //Markers will bounce when clicked
                setTimeout(function() {
                    info.setAnimation(null)
                }, 2000); //Change value to null after 2 seconds and stop markers from bouncing
        });
        
     });
    
    //Click on item in list view
    self.listViewClick = function(gym) {
       if (this.name) {
           map.setZoom(15); //Zoom map view
           map.panTo(this.latlng); // Pan to correct marker when list view item is clicked
           gym.marker.setAnimation(google.maps.Animation.BOUNCE); // Bounce marker when list view item is clicked
           infoWindow.open(map, gym.marker); // Open info window on correct marker when list item is clicked
           self.query(this.name);
       } 
        setTimeout(function() { 
            gym.marker.setAnimation(null); // End animation on marker after 2 seconds
        }, 2000);
    };
    
    // Stores user input
    self.query = ko.observable('');
    
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
    
    
    //Click event on map to zoom out to original poistion
    map.addListener('click', function(event) {
        infoWindow.close(); //Close all info windows
        infoWindow.setContent(null);
        map.setZoom(13);
        map.panTo({ lat: 40.440624, lng: -79.995888}); //map center location
        self.query('');
    });
    
    //FourSquare API Request | declare reference properties
        var clientID = '54I1UHM3AGCPB45VNROLAC23DEARBPZ3R4C0Y5QX3BDL30SV';
        var clientSecret = 'SCQYO3CFBWVOHBYK4HUMBBXF3VUIF5ETZPD01BXTGBO2YW00';
        var fqVersion = '20130815';
        var fourSqUrl;
        var llLat;
        var llLng;
        var gymContent;
        self.gymPlace = ko.observableArray();
        
        //Build correct URL for API request to Foursquare
        self.sortedLocations().forEach(function(req) {
            llLat = req.latlng.lat;
            llLng = req.latlng.lng;
            fourSqUrl = 'https://api.foursquare.com/v2/venues/explore' + '?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=' + fqVersion + '&ll=' + llLat + ',' + llLng + '&query=' + req.query + '&limit=50';
            
            //Make ajax call to Foursquare API to get requested Data
            $.ajax({
            url: fourSqUrl,
            datatype: "jsonp",
            success: function(response) {
                var resp = response.response.groups[0].items[0].venue;
        
                //Build infoWidow content string with data from API Request
                    gymContent = resp.name + '<br>' + req.phone + '<br>' + resp.location.address + '<br>' + resp.location.city + ', ' + resp.location.state + ' ' + resp.location.postalCode + '<br>'  + '<a href="' + req.website + '">' + req.website + '</a>' + '<br>' + '<a href="' + req.twitterLink + '">' + '@' + req.twitter + '</a>';
                
                self.gymPlace().push(gymContent);
                
                self.gymPlace().forEach(function(postRequest) {
                    infoWindow.setContent(postRequest.gymContent);
                    
                });
                
                
                console.log(self.gymPlace());
            } 
        });
            

            
    });
    
     
};
    

$(document).ready(function() {
    ko.applyBindings(ViewModel());
});
   








    