window.ApiUtil = {
  fetchBikes: function(boundsObj) {
    var params = boundsObj;
    $.ajax({
      url: '/api/bikes',
      type: 'get',
      data: params,
      dataType: 'json',
      success: function(result) {
        ApiActions.receiveAll(result);
      }
    });
  },

  createBike: function(bikeObj, cb) {
    var params = {bike: bikeObj};
    $.ajax({
      url: '/api/bikes',
      type: 'post',
      data: params,
      dataType: 'json',
      success: function(result) {
        ApiActions.receiveOne(result);
        cb();
      }
    });
  },

  createReview: function(reviewObj, cb) {
    var params = {review: reviewObj};
    $.ajax({
      url: '/api/reviews',
      type: 'post',
      data: params,
      dataType: 'json',
      success: function(result) {
        ApiActions.receiveOne(result);
        cb();
      }
    });
  }
};
