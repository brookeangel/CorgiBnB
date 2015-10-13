(function(root) {

  root.ReviewForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    blankAttrs: {
      body: "",
      number: ""
    },

    getInitialState: function() {
      return this.blankAttrs;
    },

    _handleSubmit: function(e) {
      e.preventDefault();
      var review = {};
      Object.keys(this.state).forEach(function(key) {
        review[key] = this.state[key];
      }.bind(this))
      this.setState(this.blankAttrs);

      ApiUtil.createReview(review, function() {
        console.log('reviewcreated');
      }.bind(this));

    },

    render: function() {
      return(
        <div class="new-corgi-form">
          <h1>Review Corgi</h1>
          <form className="newReview" onSubmit={this._handleSubmit}>
            <label htmlFor="review_number">Rate this corgi on a scale of one to five:</label>
            <input type="number" valueLink={this.linkState("number")} /><br /><br />
            <textarea
              id="review_body"
              valueLink={this.linkState("body")}></textarea>

            <button>Review Corgi</button>
          </form>
        </div>
      )
    }

  });

}(this));
