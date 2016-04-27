app.component('blockItem', {
    templateUrl: 'block.html',
    controllerAs: 'block',
    transclude:{
        content:'?content'
    },
    bindings: {
        img:'@',
        btnText:'@',
        reverse:'=',
        dark:'='
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
