(function(root) {

  root.ShowBike = React.createClass({

    getInitialState: function() {
      return {bike: null};
    },

    componentWillMount: function() {
      this.setState({bike: BikeStore.getBike(parseInt(this.props.params.id))});
    },

    render: function() {
      return(
        <div>
          <ShowMap bike={this.state.bike} />
          <div class="container">
            <div className="bikeShow">
              <img src={this.state.bike.image_url} />
              <p>{this.state.bike.description}</p>
              <p>Coords: {this.state.bike.lat}, {this.state.bike.lng}</p>
              <p>Feels most comfortable around {this.state.bike.people_comfort} people.</p>
            </div>
            <ReviewForm />
          </div>

        </div>
      )
    }
  })

}(this));
            // <Reviews />
