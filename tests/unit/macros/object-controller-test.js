import Ember from 'ember';
import {objectController} from 'ember-state-composer/macros';

module('macro/objectController');

test('instantiates and object controller', function(){
  var controller = Ember.Controller.extend({
    foo: objectController()
  }).create();
  var foo = controller.get('foo');
  ok(foo instanceof Ember.ObjectController);
  equal(foo.container, controller.container);
  equal(foo.parentController, controller);
});