app.service('Helper', () => {

    var getAttrs = ($el) => {
        console.log('getAttrs', $el)
        var obj = {};
        $($el[0].attributes).each(function () {
            obj[this.nodeName] = this.value;
        });
        return obj;
    };

    var init = () => {
    };

    init();

    return {
        getAttrs
    }
});

