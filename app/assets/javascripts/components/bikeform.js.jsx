(function(root) {

  root.BikeForm = React.createClass({

    blankAttrs: {
      lat: "",
      lng: "",
      people_comfort: '',
      description: '',
    },

    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    getInitialState: function() {
      return this.blankAttrs;
    },

    componentDidMount: function() {
      this.setState({
        lat: this.props.location.query.lat,
        lng: this.props.location.query.lng,
      });

    },

    _handleSubmit: function(e) {
      e.preventDefault();
      var bike = {};
      Object.keys(this.state).forEach(function(key) {
        bike[key] = this.state[key];
      }.bind(this))
      this.setState(this.blankAttrs);

      ApiUtil.createBike(bike, function() {
        this.history.pushState("", "");
      }.bind(this));

    },

    render: function() {
      var location = this.props.location.query;
      return(
        <div class="new-corgi-form">
          <h1>Add a Corgi</h1>
          <form className="newBike" onSubmit={this._handleSubmit}>
            <label htmlFor="bike_lat">Latitude:</label>
            <input
              type="text"
              id="bike_lat"
              valueLink={this.linkState("lat")} />

            <label htmlFor="bike_lng">Longitude:</label>
            <input
              type="text"
              id="bike_lng"
              valueLink={this.linkState("lng")} /><br /><br />

            <label htmlFor="bike_people_comfort">How many people does your corgi feel comfortable around?</label>
            <input
              type="number"
              id="bike_people_comfort"
              valueLink={this.linkState("people_comfort")} /><br /><br />

            <label htmlFor="bike_description">Description</label>
            <textarea
              id="bike_description"
              valueLink={this.linkState("description")}></textarea><br /><br />
            <button>Add Corgi</button>
          </form>
        </div>
      )
    }

  });

}(this));
