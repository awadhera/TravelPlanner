import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  email: {
    description: "Email",
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: "Email address is invalid"
      }),
      validator('email-available', {
        debounce: 300
      })
    ]
  },
  password: {
    description: "Password",
    validators: [
      validator('presence', true),
      validator('length', {
        min: 6,
        message: "Password should be atleast 6 characters long",
      })
    ]
  },
  passwordConfirmation: validator('confirmation', {
    on: 'password',
    message: 'Passwords do not match'
  })
});

export default DS.Model.extend(Validations, {
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  trips: DS.hasMany('trip')
});
