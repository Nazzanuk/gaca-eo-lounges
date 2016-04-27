app.component('loungeListItem', {
    templateUrl: 'lounge-list.html',
    controllerAs: 'loungeList',
    transclude:{},
    bindings: {
    },
    controller: function ($element, $timeout) {

        var lounges = [
            {
                img:'public/img/lounges/4.jpg',
                name:'Riydah'
            },
            {
                img:'public/img/lounges/8.jpg',
                name:'King Abdulaziz'
            },
            {
                img:'public/img/lounges/9.jpg',
                name:'Jeddah'
            },
            {
                img:'public/img/lounges/3.jpg',
                name:'King Fahd'
            },
            {
                img:'public/img/lounges/10.jpg',
                name:'King Khaled'
            },
            {
                img:'public/img/lounges/1.jpg',
                name:'Cedar Prince Muhammad Bin Abdulaziz'
            }
        ];

        var init = () => {};

        init();

        _.extend(this, {
            getLounges: () => lounges
        });
    }
});
