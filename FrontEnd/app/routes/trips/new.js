import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
  service
} = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),
  model() {
    return this.store.createRecord('trip');
  },
  actions: {
    saveTrip(newTrip) {
      newTrip.validate().then(({
        validations
      }) => {
        if (validations.get('isValid')) {
          newTrip.save().catch((error) => {
            this.set('errorMessage', error)
          }).then(() => this.transitionTo('trips'));
        }
      });
    },
    cancelTrip() {
      this.transitionTo('trips');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
