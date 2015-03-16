import DS from 'ember-data';

export default DS.Model.extend({
  name:    DS.attr('string'),
  student: DS.belongsTo('student', {async: true}),
  events:  DS.hasMany('event', {async: true})
});
