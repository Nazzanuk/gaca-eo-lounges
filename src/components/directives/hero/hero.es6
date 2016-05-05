app.component('heroItem', {
    templateUrl: 'hero.html',
    controllerAs: 'hero',
    bindings: {
        imgs: '=',
        heading: '@',
        height: '@',
        linkText: '@',
        linkUrl: '@',
        animate:'='
    },
    controller: function ($element, $timeout, $sce, $interval) {

        var currentImage = 0, images = this.imgs;

        var init = () => {
            $interval(() => currentImage = ++currentImage == images.length ? 0 : currentImage, 4500);
        };

        init();

        _.extend(this, {
            getImages:() => images,
            getCurrentImage: () => images[currentImage],
            isCurrentImage: (index) => index == currentImage,
            getHeading: () => $sce.trustAsHtml(this.heading)
        });
    }
});
