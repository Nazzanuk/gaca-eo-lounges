app.service('Menu', ($state, $stateParams, $timeout) => {

    var currentPage,
        pages = [
            {name: "Home", slug: "home"},
            {name: "Services", slug: "our-services"},
            {name: "Lounges", slug: "lounges"},
            {name: "Mission & Vision", slug: "mission"},
            {name: "Contact", slug: "contact"}
        ];

    var setPage = (slug) => {
        currentPage = slug;
        $state.go(slug);
    };

    var isCurrentPage = (slug) => {
        return slug == (currentPage || $state.current.name);
    };

    var init = () => {
        console.log($state);
        console.log('$state.get()', $state.get());
    };

    init();

    return {
        getPages: () => pages,
        setPage,
        isCurrentPage
    }
});

