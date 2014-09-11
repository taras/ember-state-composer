/*jshint unused:false */

import Ember from 'ember';

/**
 * Computed Property Macro returns a computed property that evaluates to an instance of a controller for a specified
 * factory type.
 *
 * ```javascript
 * var libraryController = Ember.Controller.extend({
 *  books: controller('books-list', {
 *      content: [ book1, book2, book3 ]
 *    })
 * }}
 *
 * // console.log(libraryController.get('books')
 * // <controller:books-list>
 * ```
 *
 * @param {string} name - controller factory to instantiate
 * @param {object} properties
 * @returns {Ember.ComputedProperty}
 */
export function controller (name, properties) {
  if (typeof properties === 'undefined') {
    properties = {};
  }
  return new Ember.ComputedProperty(function () {
    var controllerClass;
    if (name) {
      controllerClass = this.container.lookupFactory('controller:%@'.fmt(name), {instantiate: false});
    } else {
      controllerClass = Ember.Controller;
    }
    return controllerClass.extend(properties).create({
      container: this.container,
      parentController: this
    });
  }, { readOnly: true });
}

/**
 * Computed Property Macro returns a computed property that evaluates to an instance of an ObjectController
 * @param {Ember.Mixin} mixins
 * @param {object} properties
 * @returns {Ember.ComputedProperty}
 */
export function objectController (mixins, properties) {
  var args = arguments;
  return new Ember.ComputedProperty(function() {
    var controllerClass = Ember.ObjectController.extend.apply(Ember.ObjectController, args);
    return controllerClass.create({
      container: this.container,
      parentController: this
    });
  }, { readOnly: true });
}

/**
 * Computed Property Macro returns a computed property that evaluates to an instance of an Ember.ArrayController
 * @param {Ember.Mixin} mixins
 * @param {object} properties
 * @returns {Ember.ComputedProperty}
 */
export function arrayController (mixins, properties) {
  var args = arguments;
  return new Ember.ComputedProperty(function() {
    var controllerClass = Ember.ArrayController.extend.apply(Ember.ArrayController, args);
    return controllerClass.create({
      container: this.container,
      parentController: this
    });
  }, { readOnly: true });
}