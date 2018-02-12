angular.module('sbrm')
    .factory("homeService", homeService)

homeService.$inject = ['$http'];

function homeService ($http) {

  var service = {};

  service.home= HomeFunction;

  return service;

  function HomeFunction() {
      return $http.get('https://api.myjson.com/bins/6myop').then(handleSuccess).catch(handleError);

  }

  function handleError(data){
    return data;
  }

  function handleSuccess(data){
    return data;
  }




}
