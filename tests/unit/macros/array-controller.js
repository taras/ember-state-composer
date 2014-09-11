import Ember from 'ember';
import {arrayController} from 'ember-state-composer/macros';

module('macro/arrayController');

test('instantiates and array controller', function(){
  var controller = Ember.Controller.extend({
    foo: arrayController()
  }).create();
  var foo = controller.get('foo');
  ok(foo instanceof Ember.ArrayController);
  equal(foo.container, controller.container);
  equal(foo.parentController, controller);
});