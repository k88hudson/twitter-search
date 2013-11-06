requirejs.config({
  baseUrl: '../bower_components',
  paths: {
    main: '../src/main',
    nunjucks: 'nunjucks/browser/nunjucks',
    templates: '../templates',
    jquery: 'jquery/jquery'
  }
});

require([
  'jquery',
  'templates',
  'nunjucks'

], function (
  $,
  templates,
  nunjucks
){
  //
});
