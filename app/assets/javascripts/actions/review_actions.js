(function(root) {

  root.ReviewActions = {
    receiveAll: function(reviews) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEWS_RECEIVED,
        reviews: reviews
      })
    },

    receiveOne: function(review) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_RECEIVED,
        review: review
      })
    }
  }
}(this));
