import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  calendars: DS.hasMany('calendar', {async: true}),
});
