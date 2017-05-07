import 'angular';
import 'angular-mocks/angular-mocks';

const testsContext = require.context('./app/', true, /\.spec\.js$/);

testsContext.keys().forEach(testsContext);

// require all `project/src/components/**/index.js`

const componentsContext = require.context('./app/', true, /[^\.spec]\.js$/);

componentsContext.keys().forEach(componentsContext);
