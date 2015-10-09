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
      return <div>{this.state.bikes}</div>
    }
  });

}(this));
