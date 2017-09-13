// validated-input.js
import Ember from 'ember';

const {
  computed,
  defineProperty
} = Ember;

export default Ember.Component.extend({
  model: null,
  value: null,
  rawInputValue: null,
  type: 'text',
  textarea: false,
  valuePath: '',
  placeholder: '',
  label: '',
  attributeValidation: null,
  showErrorMessage: false,

  isValid: computed.oneWay('attributeValidation.isValid'),

  isInvalid: computed.oneWay('attributeValidation.isInvalid'),

  init() {
    this._super(...arguments);
    const valuePath = this.get('valuePath');
    defineProperty(this, 'attributeValidation', computed.oneWay(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
  },

  actions: {

    validate() {
      this.set('showErrorMessage', this.get('isInvalid'));
    }
  }
});
