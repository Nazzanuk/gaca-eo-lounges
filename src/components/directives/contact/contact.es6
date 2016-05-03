app.component('contactItem', {
    templateUrl: 'contact.html',
    controllerAs: 'contact',
    bindings: {
        phoneNumber:'@',
        helpEmail:'@',
        feedbackEmail:'@'
    },
    controller: function ($element, $timeout, $sce, $interval) {

        var init = () => {
        };

        init();

        _.extend(this, {
        });
    }
});
