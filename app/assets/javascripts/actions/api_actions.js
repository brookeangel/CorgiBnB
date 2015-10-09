(function(root) {

  root.ApiActions = {
    receiveAll: function(bikes) {
      AppDispatcher.dispatch({
        actionType: BikeConstants.BIKES_RECEIVED,
        bikes: bikes
      })
    }
  }
}(this));
