!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.esc=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
/*jshint unused:false */
var Ember = window.Ember["default"] || window.Ember;

/**
 * Computed Property Macro returns a computed property that evaluates to an instance of an Ember.ArrayController
 * @param {Ember.Mixin} mixins
 * @param {object} properties
 * @returns {Ember.ComputedProperty}
 */
exports["default"] = function arrayController (mixins, properties) {
  var args = arguments;
  return new Ember.ComputedProperty(function() {
    var controllerClass = Ember.ArrayController.extend.apply(Ember.ArrayController, args);
    return controllerClass.create({
      container: this.container,
      parentController: this
    });
  }, { readOnly: true });
}
},{}],2:[function(_dereq_,module,exports){
"use strict";
/*jshint unused:false */
var Ember = window.Ember["default"] || window.Ember;

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
exports["default"] = function controller (name, properties) {
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
},{}],3:[function(_dereq_,module,exports){
"use strict";
/*jshint unused:false */
var Ember = window.Ember["default"] || window.Ember;

/**
 * Computed Property Macro returns a computed property that evaluates to an instance of an ObjectController
 * @param {Ember.Mixin} mixins
 * @param {object} properties
 * @returns {Ember.ComputedProperty}
 */
exports["default"] = function objectController (mixins, properties) {
  var args = arguments;
  return new Ember.ComputedProperty(function() {
    var controllerClass = Ember.ObjectController.extend.apply(Ember.ObjectController, args);
    return controllerClass.create({
      container: this.container,
      parentController: this
    });
  }, { readOnly: true });
}
},{}],4:[function(_dereq_,module,exports){
"use strict";
var controller = _dereq_("./macros/controller")["default"] || _dereq_("./macros/controller");
var arrayController = _dereq_("./macros/array-controller")["default"] || _dereq_("./macros/array-controller");
var objectController = _dereq_("./macros/object-controller")["default"] || _dereq_("./macros/object-controller");

exports.controller = controller;
exports.arrayController = arrayController;
exports.objectController = objectController;
},{"./macros/array-controller":1,"./macros/controller":2,"./macros/object-controller":3}]},{},[4])
(4)
});