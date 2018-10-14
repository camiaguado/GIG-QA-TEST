var url = 'qatest.staging.kaboo.com';
var page = {

	credentials : function () {
        var user = 'kaboo';
        var pass = 'flappybird';

        browser.manage().deleteAllCookies();
        browser.get('http://' + user + ':' + pass + '@' + url);
    },

    goToPage : function (path) {
        browser.get('http://' + url + path);
    }
};
module.exports = page;