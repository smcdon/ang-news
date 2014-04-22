/* global app:true */
'use strict';

var app = angular.module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'app/views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'app/views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
          templateUrl: 'app/views/login.html',
          controller: 'AuthCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://burning-fire-6009.firebaseIO.com/');
