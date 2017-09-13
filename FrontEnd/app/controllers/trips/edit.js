import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.set("endDateActive", "isDisabled")
  },
  actions: {
    endDateActivate(value) {
      this.set('model.startdate', value);
      this.set("endDateActive", "");
    }
  }
});
