'use strict';

app.controller('MainController', ['$scope', '$window', '$timeout', '$document', ($scope, $window, $timeout, $document) => {
  $scope.blurbs = [
    {
      title: "Inventory Management",
      image: '../../assets/images/car_rental.png',
      description: 'Proprietary module plugged into the ODB-II port delivers data and location with Near zero battery drain, and pin-point accuracy.',
      bullets: [
        "Perform complete Inventory reconciliation without leaving your desk",
        "Deliver bank audits without the need for a physical count",
        "Know when and where a car is an who has accessed the vehicle"
      ]
    },
    {
      title: "Vehicle Security",
      image: '../../assets/images/warning_shield.png',
      description: 'Know when a vehicle is accessed without authorization and locaiton known 24/7',
      bullets: ["Without the key in the vehicle, you know the second a door is opened", "Customize the alert times and who gets them - including security", "All the other vehicles are aware of what is happening to the other around it"]
    },
    {
      title: "Vehicle Positioning",
      image: '../../assets/images/map_marker.png',
      description: 'Position of the car on the lot',
      bullets: ["Mobile app or web browser", "Know where the vehicle is on the lot", "With the presence of the mobile App, know the location of any vehicle off the lot"]

    },
    {
      title: "Vehicle Statistics",
      image: '../../assets/images/speedometer_96.png',
      description: 'Vehicle communicates with you and logs all users and activity',
      bullets: ["Where and who test drives the vehicle", "How much Gas and Battery is left", "How long it has been sitting in one place"]
    }
  ];

  $scope.steps = [
    {
      title: "The Module",
      image: '../../assets/images/module.png',
      bullets: [
        "Plugs into ODB-II Port in the vehicle",
        "Near Zero battery use",
        "Reports Location & Statistics",
        "Proprietary Network - all vehicles work together",
        "Communicate to the Gateway"
      ]
    },
    {
      title: "The Gateway",
      image: '../../assets/images/router.png',
      bullets: [
        "Secure wireless router in dealership",
        "Brain of the proprietary network",
        "Reports vehicle data to Cloud Backend",
        "Range over 300 yards from nearest vehicle"
      ]
    },
    {
      title: "Vehicle Data Access",
      image: '../../assets/images/cloud_storage.png',
      bullets: [
        "Access from any web browswer",
        "Admin controls for Users and data",
        "Data stores of ALL data from vehicles",
        "Sortable reports on vehicle location and data"
      ]
    },
  ];

  $scope.$on('goToSection', (err, section) => {
    let element = angular.element(document.getElementById(section));
    $document.scrollToElement(element, 0, 1000);
  });

  $scope.$emit("inMain");
}])
