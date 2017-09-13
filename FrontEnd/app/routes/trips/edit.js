import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
  service
} = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),
  model(params) {
    return this.store.findRecord('trip', params.trip_id);
  },
  actions: {
    saveEditedTrip(trip) {
      trip.validate().then(({
        validations
      }) => {
        if (validations.get('isValid')) {
          trip.save().catch((error) => {
            this.set('errorMessage', error)
          }).then(() => this.transitionTo('trips'));
        }
      });
    },
    cancelEditedTrip() {
      this.transitionTo('trips');
    },
    willTransition(transition) {
      let model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this trip?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
      this.controller.set("endDateActive", "isDisabled");
    }
  }
});
