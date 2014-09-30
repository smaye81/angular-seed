function DetailsController (HomeService) {

    this.selectedAlbum = HomeService.selectedAlbum;
}

module.exports = ['HomeService', DetailsController];