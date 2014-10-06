function HomeService () {

    this.getAlbums = function () {

        return [
            {
                "title" : "Please Please Me",
                "cover" : "img/beatles-please-me.jpg"
            },
            {
                "title" : "With The Beatles",
                "cover" : "img/beatles-with-the.jpg"
            },
            {
                "title" : "Hard Day's Night",
                "cover" : "img/beatles-hard-days-night.jpg"
            },
            {
                "title" : "Beatles For Sale",
                "cover" : "img/beatles-for-sale.jpg"
            },
            {
                "title" : "Help!",
                "cover" : "img/beatles-help.jpg"
            },
            {
                "title" : "Rubber Soul",
                "cover" : "img/beatles-rubber-soul.jpg"
            },
            {
                "title" : "Revolver",
                "cover" : "img/beatles-revolver.jpg"
            },
            {
                "title" : "Sgt. Pepper's Lonely Hearts Club Band",
                "cover" : "img/beatles-pepper.jpg"
            },
            {
                "title" : "Magical Mystery Tour",
                "cover" : "img/beatles-magical.jpg"
            },
            {
                "title" : "The Beatles (White Album)",
                "cover" : "img/beatles-white.jpg"
            },
            {
                "title" : "Yellow Submarine",
                "cover" : "img/beatles-yellow.jpg"
            },
            {
                "title" : "Abbey Road",
                "cover" : "img/abbey-road.jpg"
            },
            {
                "title" : "Let It Be",
                "cover" : "img/let-it-be.jpg"
            }
        ];
    };

    this.selectedAlbum = null;
}