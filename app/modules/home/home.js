var homeModule = angular.module("Home", []);

var homeController = require("./home-controller");
var detailsController = require("./details-controller");
var homeService = require("./home-service");

homeModule.controller("HomeCtrl", homeController);
homeModule.controller("DetailsCtrl", detailsController);
homeModule.service("HomeService", homeService);

module.exports = homeModule;