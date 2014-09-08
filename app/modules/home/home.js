var homeModule = angular.module("Home", []);

var homeController = require("./home-controller");

homeModule.controller("HomeCtrl", homeController);

module.exports = homeModule;