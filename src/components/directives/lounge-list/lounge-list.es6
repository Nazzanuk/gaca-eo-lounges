app.component('loungeListItem', {
    templateUrl: 'lounge-list.html',
    controllerAs: 'loungeList',
    transclude: true,
    scope: {
        img: '@',
        name: '@',
        content: '@'
    },
    bindings: {
        name:'@'
    },
    controller: function ($scope, $element, $timeout, $sce) {

        var lounges = [];

        var loadLounges = () => {
            $element.find('lounge-item').each(function () {
                var lounge = getAttrs($(this));
                lounge["content"] = $sce.trustAsHtml($(this).find('content').html());
                lounges.push(lounge);
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
