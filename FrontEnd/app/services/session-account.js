import Ember from 'ember';

const {
  inject: {
    service
  },
  RSVP
} = Ember;
export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  // Create a Promise to handle a server request that validates the current LocalStorage
  // If valid, then set SessionAccount User.
  loadCurrentUser() {
    if (!Ember.isEmpty(this.get('session.data.authenticated.userId'))) {
      return new RSVP.Promise((resolve, reject) => {
        const userId = this.get('session.data.authenticated.userId');
        const token = this.get('session.data.authenticated.token');
        if (!Ember.isEmpty(token)) {
          return this.get('store').find('user', userId).then((user) => {
            this.set('user', user);
            resolve();
          }).catch(() => {

            this.get('session').invalidate();
            reject();
          });
        } else {
          this.get('session').invalidate();
          resolve();
        }
      });
    }
  }
});
