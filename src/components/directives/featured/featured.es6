app.component('featuredItem', {
    templateUrl: 'featured.html',
    controllerAs: 'featured',
    transclude:{
        content:'?content'
    },
    bindings: {
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
