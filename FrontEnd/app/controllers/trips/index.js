import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByDestination(param) {
      if (param !== '') {
        return this.get('store').query('trip', {
          destination: param
        });
      } else {
        return this.get('store').findAll('trip');
      }
    }
  }
});
