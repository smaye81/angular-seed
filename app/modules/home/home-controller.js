function HomeController($state, HomeService) {

    this.$state = $state;
    this.HomeService = HomeService;

    this.albums = HomeService.getAlbums();
}

HomeController.prototype.viewDetails = function (album) {

    this.HomeService.selectedAlbum = album;
    this.$state.go("details");
};
