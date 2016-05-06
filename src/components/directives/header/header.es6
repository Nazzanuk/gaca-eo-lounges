app.component('headerItem', {
    templateUrl: 'header.html',
    controllerAs: 'header',
    transclude: true,
    bindings: {
        imageUrl: '@'
    },
    controller: function (Menu, $element, Helper, $timeout) {

        var showSidebar = false, menuItems = [];

        var loadMenuItems = () => {
            $element.find('menu-item').each(function () {
                let obj = Helper.getAttrs($(this));

                $(this).find('sub-item').each(function () {
                    obj.sub = obj.sub || [];
                    obj.sub.push(Helper.getAttrs($(this)));
                });
                menuItems.push(obj);
            });

            Menu.setPages(menuItems);
        };

        var init = () => {
            $timeout(loadMenuItems);
        };

        init();

        _.extend(this, {
            showSidebar: () => showSidebar,
            toggleSidebar: () => showSidebar = !showSidebar,
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            clickMenuItem: Menu.clickMenuItem,
            isCurrentPage: Menu.isCurrentPage
        });
    }
});
