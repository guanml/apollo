appService.service('UserService', ['$resource', '$q', function ($resource, $q) {
    var user_resource = $resource('', {}, {
        load_user:{
            method: 'GET',
            url:'/user'
        },
        find_users: {
            method: 'GET',
            url: '/users'
        }
    });
    return {
        load_user: function () {
            var d = $q.defer();
            user_resource.load_user({
                                    },
                                    function (result) {
                                        d.resolve(result);
                                    }, function (result) {
                    d.reject(result);
                });
            return d.promise;
        },
        find_users: function (keyword) {
            var d = $q.defer();
            user_resource.find_users({
                                        keyword: keyword
                                    },
                                    function (result) {
                                        d.resolve(result);
                                    }, function (result) {
                    d.reject(result);
                });
            return d.promise;
        }
    }
}]);
