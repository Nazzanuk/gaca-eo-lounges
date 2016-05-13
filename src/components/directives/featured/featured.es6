app.component('featuredItems', {
    templateUrl: 'featured.html',
    bindToController: true,
    controllerAs: 'featured',
    transclude: true,
    scope: {
        image: '@',
        title: '@',
        link: '@'
    },
    controller: function ($scope, $element, $timeout, Helper) {

        var featuredItems = [];

        var loadFeaturedItems = () => {
            $element.find('featured-item').each(function () {
                featuredItems.push(Helper.getAttrs($(this)));
            });
        };

        var init = () => {
            $timeout(loadFeaturedItems);
        };

        init();

        _.extend(this, {
            getFeaturedItems: () => featuredItems
        });
    }
});
