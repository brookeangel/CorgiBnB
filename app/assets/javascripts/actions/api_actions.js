(function(root) {

  root.ApiActions = {
    receiveAll: function(bikes) {
      AppDispatcher.dispatch({
        actionType: BikeConstants.BIKES_RECEIVED,
        bikes: bikes
      })
    },

    receiveOne: function(bike) {
      AppDispatcher.dispatch({
        actionType: BikeConstants.BIKE_RECEIVED,
        bike: bike
      })
    }
  }
}(this));
