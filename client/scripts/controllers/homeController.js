angular.module('sbrm')
    .controller('homeController', homeController);

homeController.$inject = ['$scope', 'homeService','$route','$state','NgMap'];


function homeController($scope, homeService,$route,$state,NgMap) {
    var ctrl = this;

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2HH8P09sk1a6NtFeDQfDa23pvbOdPKcU";

    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });



}