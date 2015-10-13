(function(root) {

  var CHANGE_EVENT = "change";
  var _bikes = [];

  root.BikeStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _bikes.slice(0);
    },

    getBike: function(id) {
      var bikeIds = _bikes.map(function(bike) {return bike["id"];});
      var index = bikeIds.indexOf(id);
      return _bikes[index];
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

    addBike: function(bike) {
      _bikes.push(bike);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case BikeConstants.BIKES_RECEIVED:
          BikeStore.resetBikes(payload.bikes);
          BikeStore.emit(CHANGE_EVENT);
          break;
        case BikeConstants.BIKE_RECEIVED:
          BikeStore.addBike(payload.bike);
          BikeStore.emit(CHANGE_EVENT);
          break;
      }
    })
  })
}(this));
