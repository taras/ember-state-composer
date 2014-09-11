import Ember from 'ember';
import {controller} from 'ember-state-composer/macros';

export default Ember.ObjectController.extend({
  itemList: controller('invoice/item-list')
});