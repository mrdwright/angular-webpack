const routes = function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      resolve: {
        load: ['$q', function ($q) {
          const deferred = $q.defer();
          require.ensure([], (require) => {
            require('./about.component');
            deferred.resolve();
          }, '_about');
          return deferred.promise;
        }],
      },
    });
  $urlRouterProvider.otherwise('/');
};

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routes;
