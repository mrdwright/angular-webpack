const routes = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
    });
  $urlRouterProvider.otherwise('/');
};

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routes;
