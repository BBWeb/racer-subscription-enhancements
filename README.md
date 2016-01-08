# racer-subscription-enhancements
Racer/Derby plugin for a broader fetch/sub syntax

How to use
==========
After adding the plugin:
```javascript
derby.use(require('racer-subscription-enhacements'));
```

Run it as described below.

Features
========
Makes it possible to pass along scoped models into .fetch / .subscription
Makes it possible to pass along collection paths into .fetch / .subscription

Basically, scoped models and collection paths are converted into queries.

```javascript
$coll = model.scope('coll');
model.subscribe($coll, 'coll2',, function () {
  $coll.get(); // Returns the whole coll collection
  model.get('coll2'); // Returns the whole coll2 collection
});
```
