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
export default function controller (name, properties) {
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