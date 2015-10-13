(function(root) {

  var CHANGE_EVENT = "change";
  var _reviews = [];

  root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _reviews.slice(0);
    },

    addChangeListener: function(cb) {
      this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    },

    resetBikes: function(reviews) {
      _reviews = reviews;
    },

    addReview: function(review) {
      _reviews.push(review);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case ReviewConstants.REVIEWS_RECEIVED:
          ReviewStore.resetReviews(payload.reviews);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_RECEIVED:
          ReviewStore.addReview(payload.review);
          ReviewStore.emit(CHANGE_EVENT);
          break;
      }
    })
  })
}(this));
