var states = [
    {
        name:'home',
        state:{
            url:'/home',
            templateUrl : '../views/home.html',
            data:{
                text:'HOME',
                visible:false
            }
        }
    },  {
        name:'contact',
        state:{
            url:'/contact',
            templateUrl : '../views/contact.html',
            data:{
                text:'CONTACT',
                visible:false
            }
        }
    },
    {
        name:'company',
        state:{
            url:'/company',
            templateUrl : '../views/company.html',
            data:{
                text:'COMPANY',
                visible:false
            }
        }
    },
    {
        name:'product',
        state:{
            url:'/product',
            templateUrl : '../views/product.html',
            data:{
                text:'PRODUCT',
                visible:false
            }
        }
    },
    {
        name:'about',
        state:{
            url:'/about',
            templateUrl : '../views/about.html',
            data:{
                text:'ABOUT',
                visible:false
            }
        }
    }
];

var app = angular.module('sbrm',['ui.router','ui.bootstrap','ngRoute','ngMap'])
  app.config(function($stateProvider, $urlRouterProvider,$routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/home.html',
              controller: 'homeController'
          })
          .when('/contact', {
              templateUrl: 'views/contact.html',
              controller: 'homeController'
          })
          .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'homeController'
          })

         .when('/product', {
          templateUrl: 'views/product.html',
          controller: 'homeController'
         })
         .when('/company', {
          templateUrl: 'views/company.html',
          controller: 'homeController'
      });
      $urlRouterProvider.otherwise('/home');
        states.forEach(function(state)
        {
            $stateProvider.state(state.name, state.state);
        })
    });