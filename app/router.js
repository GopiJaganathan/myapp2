import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post');
  this.route('cars', function() {
    this.route('new');
  });
  this.route('users');
});

export default Router;
