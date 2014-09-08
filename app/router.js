function Router($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            controller : "HomeCtrl as homeCtrl",
            templateUrl: "modules/home/home.html"
        });
}

module.exports = Router;