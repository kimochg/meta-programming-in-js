/**
 * MetaObject
 * implemente a method missing member function, will be called if some funciton doesn't exist.
 */
var MetaObject = function() {
  this.send = function(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (!this[method]) {
      return this.methodMissing.apply(this, args);
    }

    this[method].apply(this, args);
  }

  this.methodMissing = function() {
    console.log(arguments);
  }
}

/* Normal Object Constructor */
var TestObj = function() {
  this.name = 'TestObj'
}

TestObj.prototype = new MetaObject();

var a = new TestObj();

a.send('greeting', 'hi'); /* logout arguments */
