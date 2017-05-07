import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutRoutes from './about.routes';

const about = angular
  .module('about', [uiRouter])
  .config(AboutRoutes)
  .name;

export default about;

