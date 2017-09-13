import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
let App;

//Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});
/*
App.DateField = Ember.TextField.extend({
  classNames: ['form-control', 'date-input'],
  picker: null,

  updateValues: (function() {
    var date;
    date = moment(this.get("value"));
    if (date.isValid()) {
      this.set("date", date.toDate());
      this.set("dateDisplay", date.format("MMM Do YYYY"));
      return this.set("valid", true);
    } else {
      this.set("date", null);
      this.set("dateDisplay", "Invalid");
      return this.set("valid", false);
    }
  }).observes("value"),

  didInsertElement: function() {
    var picker;
    picker = new Pikaday({
      field: this.$()[0],
      format: "YYYY-MM-DD"
    });
    return this.set("picker", picker);
  }
});
*/
loadInitializers(App, config.modulePrefix);

export default App;
