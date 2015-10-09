window.ApiUtil = {
  fetchBikes: function(boundsObj) {
    var params = {bounds: boundsObj};
    $.ajax({
      url: '/api/bikes',
      type: 'get',
      data: params,
      dataType: 'json',
      success: function(result) {
        ApiActions.receiveAll(result);
      }
    });
  }
};
