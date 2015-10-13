(function(root) {

  root.HumansFilter = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
      return({
        min: 0,
        max: 100
      });
    },

    componentDidMount: function() {
      var minMaxHumans = {};
      Object.keys(this.state).forEach(function(key) {
        minMaxHumans[key] = this.state[key];
      }.bind(this));
      FilterActions.receiveAll({humanBounds: minMaxHumans});
    },

    _handleSubmit: function(e) {
      e.preventDefault();
      var minMaxHumans = {};
      Object.keys(this.state).forEach(function(key) {
        minMaxHumans[key] = this.state[key];
      }.bind(this));
      FilterActions.receiveAll({humanBounds: minMaxHumans});
    },

    render: function() {
      return(
        <div className="typeBar">
          <form onSubmit={this._handleSubmit}>
            <label for="min_humans">Min Humans Petting Corgi:</label>
            <input
              type="number"
              id="min_humans"
              valueLink={this.linkState("min")}/>
            <label for="max_humans">Max Humans Petting Corgi:</label>
            <input
              type="number"
              id="max_humans"
              valueLink={this.linkState("max")}/>
            <button>Filter Corgis</button>
          </form>
        </div>
      )
    }
  });

}(this));
