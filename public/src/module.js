angular
  .module("App", ["ngMaterial", "ngMessages", "ngRoute"])
  .constant("API", "http://localhost:5000/api/deliveries")
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when("/", {
        templateUrl: "src/api/deliveries/index.html",
        controller: "deliveriesController",
        css: "www/app/login/style.css"
      })
      .otherwise({
        redirectTo: "/"
      });
  });
