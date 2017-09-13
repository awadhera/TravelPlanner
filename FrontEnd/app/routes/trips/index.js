import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
  service
} = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),
  model() {
    return this.get('store').findAll('trip');
  },
  actions: {
    editTrip(tripid) {
      this.transitionTo('trips.edit', tripid);
    },
    deleteTrip(trip) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        trip.destroyRecord();
      }
    }
  }
});
