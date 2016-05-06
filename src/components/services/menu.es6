app.service('Menu', ($state, $stateParams, $timeout) => {

    var currentPage, pages = [];

    var setPage = (url) => {
        currentPage = url;
        //$state.go(url);
        //console.log('url', url);
        window.location.href = url;
    };

    var setPages = (obj) => {
        pages = obj;
    };

    var clickMenuItem = (index) => {
        if (pages[index].sub) {
            pages[index].active = !(pages[index].active);
        } else {
            setPage(pages[index].url);
        }
    };

    var setSubMenu = () => {

    };

    var isCurrentPage = (url) => {
        return url == (currentPage || $state.current.name);
    };

    var init = () => {
    };

    init();

    return {
        setPages,
        clickMenuItem,
        setSubMenu,
        getPages: () => pages,
        setPage,
        isCurrentPage
    }
});

