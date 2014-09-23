define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /*jshint unused:false */
    var Ember = __dependency1__["default"] || __dependency1__;

    /**
     * Computed Property Macro returns a computed property that evaluates to an instance of an ObjectController
     * @param {Ember.Mixin} mixins
     * @param {object} properties
     * @returns {Ember.ComputedProperty}
     */
    __exports__["default"] = function objectController (mixins, properties) {
      var args = arguments;
      return new Ember.ComputedProperty(function() {
        var controllerClass = Ember.ObjectController.extend.apply(Ember.ObjectController, args);
        return controllerClass.create({
          container: this.container,
          parentController: this
        });
      }, { readOnly: true });
    }
  });