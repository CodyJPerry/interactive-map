//Hard coded inital Locations
var initialLocations = [
    {
        name: "Fitness Factory",
        address: "214 S Highland Ave, Pittsburgh, PA",
        description: "The Fitness Factory is an independent locally owned gym located in Pittsburgh’s ever expanding Shadyside neighborhood. We have been in business and serving the community for more than 20 years. Our fitness philosophy focuses on a combination of strength, cardio and wellness.",
        latlng: { lat: 40.458458, lng: -79.925130 }
        // url: API Link goes here Yelp? Instagram? 
    },
    {
        name: "MÜV Integrated Physical Culture",
        address: "5469 Penn Ave Pittsburgh, PA 15206",
        description: "At MÜV Integrated, we believe that movement and fitness should only be based on the science of the human body. We are confident in our ability to take anyone from a baseline and utilize Strategic Resistance™ manipulation to build postural endurance, strength, conditioning, mobility, speed, and power.",
        latlng: { lat: 40.464666, lng: -79.933382 }
        // url: API Link goes here Yelp? Instagram?
    },
    {
        name: "PNC YMCA",
        address: "236 Fifth Ave Pittsburgh, PA 15222",
        description: "Today, the Y engages more than 10,000 neighborhoods across the U.S. As the nation’s leading nonprofit committed tohelping people and communities to learn, grow and thrive, our contributions are both far-reaching and intimate—from influencing our nation’s culture during times of profound social change to the individual support we provide an adult learning to read.",
        latlng: { lat: 40.440763, lng: -80.001168 }
        // url: API Link goes here Yelp? Instagram?
    },
    {
        name: "X Shadyside",
        address: "5608 Walnut St Pittsburgh, PA 15232",
        description: "Since 1994, X Shadyside 24 Hour Health and Fitness has been a leader in providing the most modern fitness solutions in the Shadyside, Squirrel Hill, Oakland, and other East End communities of Pittsburgh. Recognized for our convenient location, contemporary equipment, and strong group exercise program; we are absolutely dedicated to providing our members with the best in fitness!",
        latlng: { lat: 40.451574, lng: -79.931729 }
        // url: API Link goes here Yelp? Instagram?
    },
    {
        name: "Orangetheory Fitness",
        address: "5841 Penn Ave Pittsburgh, PA 15206",
        description: "Orangetheory Fitness offers 60-minute workout sessions split into intervals of cardiovascular and strength training with heart rate monitors to track intensity and maximize metabolic burn. Increase energy, get visible results and burn more calories, even after leaving the studio. That's the Orange Effect!",
        latlng: { lat: 40.462251, lng: -79.927118 }
        // url: API Link goes here Yelp? Instagram?
    },
    {
        name: "Shape Training",
        address: "5877 Commerce St Pittsburgh, PA 15206",
        description: "Our aim is to change the climate of the fitness industry by providing a dynamic, energetic, and comprehensive platform for our clients.",
        latlng: { lat: 40.459523, lng: -79.928313 }
        // url: API Link goes here Yelp? Instagram?
    },
    {
        name: "Gold’s Gym",
        address: "100 Forbes Ave Pittsburgh, PA 15222",
        description: "Get fit with a membership to Gold’s Gym Pittsburgh (Market Square), located in Pittsburgh, PA. With our exceptional health club, you’ll reach your fitness goals in no time, whether you’re aiming to lose weight, flatten your abs or shred upper body muscles. Our world-class fitness experts are always ready to provide workout tips and sound fitness advice. Members at Gold’s Gym Pittsburgh (Market Square) enjoy a state-of-the-art workout facility, top-tier amenities and the best fitness options in the industry.",
        latlng: { lat: 40.440900, lng: -80.003742 }
        // url: API Link goes here Yelp? Instagram?
    },
    {
        name: "Panthro Fitness",
        address: "3117 Penn Ave Pittsburgh, PA 15201",
        description: "Consistent support to answer any question or problem you may have. Lose weight, increase muscle tone and feel more confident than ever! A greater range of motion and joint movement to keep you healthy. Learn about and implement a diet that will transform your physique.",
        latlng: { lat: 40.460252, lng: -79.971044 }
        // url: API Link goes here Yelp? Instagram?
        
    },
    {
       name: "terraFITNESS",
       address: "35746 Baum Blvd Pittsburgh, PA 15206",
       description: "Everyone has individual goals, and we will work together to meet them. I talk to each client to understand their strengths, weaknesses and limitations. I then design a personal training program based on this information. I help my clients achieve, maintain, and even exceed what they once thought was impossible.",
       latlng: { lat: 40.458625, lng: -79.931998 }
       // url: API Link goes here Yelp? Instagram? 
    },
    {
        name: "The Greentree Sportsplex",
        address: "600 Iron City Dr Pittsburgh, PA 15220",
        description: "Think about this question for a second… Where can you find a Fitness Center, Basketball/Volleyball Courts, Badminton, 3 giant indoor turf fields that can be used for: (Soccer, Baseball, Softball, Football, Kickball, Lacrosse, Frisbee, etc…), and Indoor Batting Cages and Live Pitching Tunnels. Oh, by the way we also have our own CrossFit Gym section, D1 Sports Performance Training Gym section, Warriors Fitness Kickboxing Gym section, plus a Salsa Dance Studio section. So instead of the question of why should someone want to join our gym, lets rephrase that to “Why shouldn’t someone want to join our gym?”",
        latlng: { lat: 40.420392, lng: -80.058305 }
        // url: API Link goes here Yelp? Instagram? 
    }
    
];

//String to display in info window
var content = "This is working!!!";

//Declare Map variable and markers array
var map;

//Create Instance of a map from the Google maps api
//Grab the reference to the "map" id to display map
//Set the map options object properties 
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 40.440624, lng: -79.995888},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
};

// tells the view model what to do when a change occurs
function gymLocation(value) {
    this.name = ko.observable(value.name);
    this.address = ko.observable(value.address);
    this.description = ko.observable(value.description);
    this.lat = ko.observable(value.lat);
    this.lng = ko.observable(value.lng);
};


//ViewModel
function ViewModel() {
    
    var self = this;
    self.markers = [];

    
    //Copies the values of initialLocations and stores them in sortedLocations(); observableArray
    self.sortedLocations = ko.observableArray(initialLocations.slice());
    
    //Adds new markers at each location in the initialLocations Array
    self.sortedLocations().forEach(function(location) {
        var marker = new google.maps.Marker({
            position: location.latlng,
            map: map,
            title: location.name
        });
        //Pushes each marker into the markers array
        this.markers.push(marker);
    });
    
    //Map info windows to each item in the markers array
    self.markers.map(function(info) {
            var window = new google.maps.InfoWindow({
                content: content,
                position: info.latlng,
                map: map,
                title: info.name
            });
        //Add click event to each marker to open info window
        info.addListener('click', function() {
            for (var i = 0; i < self.markers.length; i++) {
                window.open(map, markers[i])
            }
        });
     });
};
    

$(document).ready(function() {
    ko.applyBindings(ViewModel);
});
   








    