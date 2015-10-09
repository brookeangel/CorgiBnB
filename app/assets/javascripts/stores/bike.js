(function(root) {

  var CHANGE_EVENT = "change";
  var _bikes = [];
  root.BikeStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _bikes.slice(0);
    },

    addChangeListener: function(cb) {
      this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    },

    resetBikes: function(bikes) {
      _bikes = bikes;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      if(payload.actionType === BikeConstants.BIKES_RECEIVED) {
        BikeStore.resetBikes(payload.bikes);
        BikeStore.emit(CHANGE_EVENT);
      }
    })
  })
}(this));
