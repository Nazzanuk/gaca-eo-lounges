app.component('footItem', {
    templateUrl: 'foot-item.html',
    controllerAs: 'foot',
    transclude:true,
    bindings: {
        imageUrl: '@'
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
