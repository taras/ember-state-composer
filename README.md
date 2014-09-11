# ember-state-composer EmberCLI Addon

**ember-state-composer** makes it easier to programmatically define state on route controllers. Composing state makes it
easy to group related functionality into logical objects that are easy to present in templates.

## api

### controller([name][, properties])

Returns a computed property that evaluates to an instance of a controller. Instantiated controller has parentController
property which references the controller that instantiated it.

* name - (optional) factory name of the controller to instantiate. Default: Ember.Controller is used
* properties - (optional) hash of properties that are passed to extend to define class that will be instantiated

**Example**

```
import {controller} from 'ember-state-composer/macros';

export default InvoiceController = Ember.ObjectController.extend({
  lineItems: controller('line-items') // will evaluate to an instance of LineItemsController
});
```

### objectController([mixin][, mixin][, properties])
  
Returns a computed property that evaluates to an instance of an object controller. Instantiated controller has 
parentController property which references the controller that instantiated it.

```
import {objectController} from 'ember-state-composer/macros';

export default InvoiceController = Ember.ObjectController.extend({
  recipient: objectController(Fly, {}) // will evaluate to an an instance of a ObjectController with Fly mixin
});
```

### arrayController([mixin][, mixin][, properties])
  
Returns a computed property that evaluates to an instance of an array controller. Instantiated controller has 
parentController property which references the controller that instantiated it.

```
import {objectController} from 'ember-state-composer/macros';

export default InvoiceController = Ember.ObjectController.extend({
  lineItems: arrayController({
    content: ['line1', 'line2']
  }) // will evaluate to an an instance of a ArrayController with content
});
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
