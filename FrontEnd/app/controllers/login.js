import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancelLogin() {
      this.transitionToRoute('index');
    }
  }
});
