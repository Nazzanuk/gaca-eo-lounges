app.controller('HomeScreen', ($element, $timeout, $scope, Jobs) => {

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {
        getJobs: Jobs.getJobs
    });
});


