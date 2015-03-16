import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.baseURL, // required for serving statically from Firebase or similar
});

Router.map(function() {
  this.resource('students', { path: '/students' }, function() {
    this.resource('student', { path: ':student_id'}, function() {
      this.resource('calendars', { path: '/calendars'}, function() {
        this.resource('calendar', { path: ':calendar_id'});
      });
    });
  });

});

export default Router;
