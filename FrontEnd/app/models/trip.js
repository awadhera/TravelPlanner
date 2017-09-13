import Ember from 'ember';
import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  destination: {
    description: "Destination",
    validators: [
      validator('presence', true)
    ]
  },
  startdate: {
    description: "Start date",
    validators: [
      validator('presence', true),
      validator('date', {
        format: 'YYYY-MM-DD'
      })
    ]
  },
  enddate: {
    description: "End date",
    validators: [
      validator('presence', true),
      validator('date', {
        format: 'YYYY-MM-DD'
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  destination: DS.attr('string'),
  startdate: DS.attr('date'),
  enddate: DS.attr('date'),
  comment: DS.attr('string'),
  user: DS.belongsTo('user'),
  daystotrip: Ember.computed('startdate', function() {
    var date1 = new Date(this.get('startdate'));
    var date2 = new Date();
    //var temp = date2.getMonth();
    //return temp;
    var timeDiff = (date1.getTime() - date2.getTime());
    if (timeDiff > 0) {
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    } else {
      return '-';
    }
  }),
});
