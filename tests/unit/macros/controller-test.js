import {moduleFor, test} from 'ember-qunit';
import ItemListController from 'dummy/controllers/invoice/item-list';
import {controller} from 'ember-state-composer/macros';
import Ember from 'ember';

moduleFor('controller:invoice', 'macros/controller', {
  needs: ['controller:invoice/item-list', 'controller:invoice/item']
});

test('lookups factories', function(){
  var controller = this.subject();
  var itemList = controller.get('itemList');
  ok(itemList instanceof ItemListController);
  equal(itemList.container, controller.container);
  equal(itemList.parentController, controller);
});

module('macros/controller');

QUnit.test('instantiates a controller without name', function(){

  var bar = Ember.Controller.extend({
    foo: controller()
  }).create();

  ok(bar.get('foo') instanceof Ember.Controller);
});