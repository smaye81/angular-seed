var homeModule = angular.module("Home", []);

homeModule.controller("HomeCtrl", HomeController);
homeModule.controller("DetailsCtrl", DetailsController);
homeModule.service("HomeService", HomeService);
