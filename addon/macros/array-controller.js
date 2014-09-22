/*jshint unused:false */
import Ember from 'ember';

/**
 * Computed Property Macro returns a computed property that evaluates to an instance of an Ember.ArrayController
 * @param {Ember.Mixin} mixins
 * @param {object} properties
 * @returns {Ember.ComputedProperty}
 */
export default function arrayController (mixins, properties) {
  var args = arguments;
  return new Ember.ComputedProperty(function() {
    var controllerClass = Ember.ArrayController.extend.apply(Ember.ArrayController, args);
    return controllerClass.create({
      container: this.container,
      parentController: this
    });
  }, { readOnly: true });
}