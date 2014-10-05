describe('Home Controller Tests', function () {

    var mocks = angular.mock;

    var sut;

    beforeEach(function () {

        mocks.module(homeModule.name);

    });

    beforeEach(function () {
        mocks.module(function ($provide) {
            $provide.value("HomeService", {
                getAlbums : function () {
                    return [
                        "Blah"
                    ]
                }
            });

            $provide.value("$state", {
                go : jasmine.createSpy("go")
            })
        });
    });

    beforeEach(function () {
        mocks.inject(function ($controller, $rootScope) {
            sut = $controller("HomeCtrl", {
                $scope : $rootScope
            });
        })
    });
    
    it('should pass', function () {
        expect(sut.albums).toEqual(["Blah"]);
    });
    
});






// Describe

// Load angular mocks
// Load the module under test

// Use Angular mocks to load our module

// $provide value for dependencies mocks module

// mocks.inject for controller