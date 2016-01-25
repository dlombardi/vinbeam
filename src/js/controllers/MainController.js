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

  $scope.$on('goToSection', (err, section) => {
    let element = angular.element(document.getElementById(section));
    $document.scrollToElement(element, 0, 1000);
  });

  $scope.$emit("inMain");
}])
