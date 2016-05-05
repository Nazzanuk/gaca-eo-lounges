app.component('loungeListItem', {
    templateUrl: 'lounge-list.html',
    controllerAs: 'loungeList',
    transclude: true,
    bindings: {
        name: '@',
        types: '='
    },
    controller: function ($scope, $element, $timeout, $sce, Helper) {
        var lounges = [], types = this.types || ['International', 'Regional', 'Local'], currentType = 0, selectVisible = false;

        var loadLounges = () => {
            $element.find('lounge-item').each(function () {
                var lounge = Helper.getAttrs($(this));
                lounge["content"] = $sce.trustAsHtml($(this).find('content').html());
                lounges.push(lounge);
            });
        };

        var setType = (index) => {
            currentType = index;
        };

        var events = () => {
            $element.find('.select-type').on('click', () => false);
            $('body').on('click', () => $scope.$apply(() => selectVisible = false));
        };

        var init = () => {
            events();
            $timeout(loadLounges);
        };

        init();

        _.extend(this, {
            setSelectVisible: (flag) => selectVisible = flag,
            isSelectVisible: () => selectVisible,
            setType,
            getType: () => types[currentType],
            getTypes: () => types,
            getLounges: () => lounges
        });
    }
});
