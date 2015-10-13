(function(root) {

  root.Index = React.createClass({
    getInitialState: function() {
      return {bikes: BikeStore.all()};
    },

    componentDidMount: function() {
      BikeStore.addChangeListener(this._updateBikes);
    },

    _updateBikes: function() {
      this.setState({bikes: BikeStore.all()});
    },

    render: function() {
      return(
        <div className="bikeIndex">
          <div className="typeBar">Dates Here</div>
          <HumansFilter />
          <div className="typeBar">Prices Here</div>
          <div className="bikes">
            {this.state.bikes.map(function(bike) {
              return(
                <Bike bike={bike} />
              )
            })}
          </div>
        </div>
    )
    }
  });

}(this));
