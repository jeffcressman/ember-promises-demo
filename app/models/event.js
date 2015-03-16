import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  date:     DS.attr('date'),
  calendar: DS.belongsTo('calendar', {async: true}),

  displayDate: function(){
    return moment(this.get('date')).format('MMMM Do YYYY, h:mm a');
  }.property()
});
