define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /*jshint unused:false */
    var Ember = __dependency1__["default"] || __dependency1__;

    /**
     * Computed Property Macro returns a computed property that evaluates to an instance of an Ember.ArrayController
     * @param {Ember.Mixin} mixins
     * @param {object} properties
     * @returns {Ember.ComputedProperty}
     */
    __exports__["default"] = function arrayController (mixins, properties) {
      var args = arguments;
      return new Ember.ComputedProperty(function() {
        var controllerClass = Ember.ArrayController.extend.apply(Ember.ArrayController, args);
        return controllerClass.create({
          container: this.container,
          parentController: this
        });
      }, { readOnly: true });
    }
  });