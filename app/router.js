import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("regex", { path: '/' });
  this.route("about-us", { path: 'about-us' });
});

export default Router;
