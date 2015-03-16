import Ember from 'ember';
import ENV from 'ember-promises/config/environment';

export default Ember.Route.extend({

  actions: {
    seed: function(){
			var store = this.container.lookup('store:main');

			// Firebase reference
			var ref = new window.Firebase(ENV.firebase);

      var seedDB = function(){

        var promises = {
          student01: store.createRecord('student', {name: 'Buck Rogers'}).save(),
          calendar01: store.createRecord('calendar', {name: 'School Events'}).save(),
          calendar02: store.createRecord('calendar', {name: 'Sports Events'}).save(),
          event01: store.createRecord('event', {
            name: 'Field trip',
            date: moment().add(2, 'days').toDate()
          }).save(),
          event02: store.createRecord('event', {
            name: 'School play',
            date: moment().add(7, 'days').toDate()
          }).save(),
          event03: store.createRecord('event', {
            name: 'Hockey playoffs',
            date: moment().add(4, 'days').toDate()
          }).save(),
          student02: store.createRecord('student', {name: 'Alice Munroe'}).save(),
          calendar03: store.createRecord('calendar', {name: 'Music Events'}).save(),
          event04: store.createRecord('event', {
            name: 'Burning Man',
            date: moment().add(10, 'days').toDate()
          }).save(),
          event05: store.createRecord('event', {
            name: 'Sound of Music',
            date: moment().add(14, 'days').toDate()
          }).save()
        };

        // Set up the relationships after the records have been saved
        Ember.RSVP.hash(promises).then(function(hash){
          hash.student01.get('calendars').pushObject(hash.calendar01);
          hash.student01.get('calendars').pushObject(hash.calendar02);
          hash.student01.save();

          hash.calendar01.get('events').pushObject(hash.event01);
          hash.calendar01.get('events').pushObject(hash.event02);
          hash.calendar01.save();

          hash.calendar02.get('events').pushObject(hash.event03);
          hash.calendar02.save();

          hash.student02.get('calendars').pushObject(hash.calendar03);
          hash.student02.save();

          hash.calendar03.get('events').pushObject(hash.event04);
          hash.calendar03.get('events').pushObject(hash.event05);
          hash.calendar03.save();
        });
      };

      var onComplete = function(error) {
        if (error) {
          Ember.Logger.debug('Synchronization failed');
        } else {
          Ember.Logger.debug('Synchronization succeeded.');
          seedDB();
        }
      };

      // delete existing data and seed new data on completion
      ref.remove(onComplete);

    }
  }
});
