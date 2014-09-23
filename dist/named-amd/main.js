define("ember-state-composer/macros",
  ["./macros/controller","./macros/array-controller","./macros/object-controller","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var controller = __dependency1__["default"] || __dependency1__;
    var arrayController = __dependency2__["default"] || __dependency2__;
    var objectController = __dependency3__["default"] || __dependency3__;

    __exports__.controller = controller;
    __exports__.arrayController = arrayController;
    __exports__.objectController = objectController;
  });
define("ember-state-composer/macros/array-controller",
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
define("ember-state-composer/macros/controller",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /*jshint unused:false */
    var Ember = __dependency1__["default"] || __dependency1__;

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
    __exports__["default"] = function controller (name, properties) {
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
  });
define("ember-state-composer/macros/object-controller",
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
define("ember-state-composer",
  ["./macros/controller","./macros/array-controller","./macros/object-controller","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var controller = __dependency1__["default"] || __dependency1__;
    var arrayController = __dependency2__["default"] || __dependency2__;
    var objectController = __dependency3__["default"] || __dependency3__;

    __exports__.controller = controller;
    __exports__.arrayController = arrayController;
    __exports__.objectController = objectController;
  });