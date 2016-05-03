app.component('featuredItems', {
    templateUrl: 'featured.html',
    bindToController: true,
    controllerAs: 'featured',
    transclude: true,
    scope: {
        image: '@',
        title: '@'
    },
    controller: function ($scope, $element, $timeout) {

        var featuredItems = [];

        var loadFeaturedItems = () => {
            $element.find('featured-item').each(function () {
                featuredItems.push(getAttrs($(this)));
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

var getAttrs = ($el) => {
    var obj = {};
    $($el[0].attributes).each(function () {
        obj[this.nodeName] = this.value;
    });
    return obj;
};
