app.component('headerItem', {
    templateUrl: 'header.html',
    controllerAs: 'header',
    bindings: {
        img: '@'
    },
    controller: function (Menu) {

        var showSidebar = false;

        var init = () => {};

        init();

        _.extend(this, {
            showSidebar: () => showSidebar,
            toggleSidebar: () => showSidebar = !showSidebar,
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage
        });
    }
});
