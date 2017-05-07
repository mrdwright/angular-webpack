import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';
import HomeRouting from './home.routes';

const home = angular
  .module('home', [uiRouter])
  .component('home', HomeComponent)
  .config(HomeRouting)
  .name;

export default home;
