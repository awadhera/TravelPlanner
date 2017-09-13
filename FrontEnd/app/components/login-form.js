import Ember from 'ember';
import {
  buildValidations,
  validator
} from 'ember-cp-validations';
const {
  service
} = Ember.inject;
const Validations = buildValidations({
  email: {
    description: "Email",
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: "Email address is invalid",
      })
    ]
  },
  password: {
    description: "Password",
    validators: [
      validator('presence', true)
    ]
  }
});


export default Ember.Component.extend(Validations, {
  session: service('session'),

  actions: {
    authenticate: function() {
      let {
        identification,
        password
      } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },
    cancelLogin: function() {
      this.get('cancelLogin')();
    }
  }
});
