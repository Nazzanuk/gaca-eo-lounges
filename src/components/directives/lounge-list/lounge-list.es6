app.component('loungeListItem', {
    templateUrl: 'lounge-list.html',
    controllerAs: 'loungeList',
    transclude: {
        content: '?content'
    },
    scope: {
        img: '@',
        name: '@'
    },
    bindings: {
        name:'@'
    },
    controller: function ($scope, $element, $timeout) {

        var lounges = [];

        var loadLounges = () => {
            console.log($element.html());
            $element.find('lounge-item').each(function () {
                lounges.push(getAttrs($(this)));
            });
        };

        var init = () => {
            $timeout(loadLounges);
        };

        init();

        _.extend(this, {
            getLounges: () => lounges
        });
    }
});
