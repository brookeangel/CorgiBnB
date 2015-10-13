(function(root) {

  root.Search = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    getInitialState: function() {
      return {params: ''};
    },

    componentDidMount: function() {
      FilterParamsStore.addChangeListener(function() {
        this.setState({params: FilterParamsStore.filterParams()});
        ApiUtil.fetchBikes(this.state.params);
      }.bind(this));
    },

    handleMapClick: function(e) {
      var location = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this.props.history.pushState(null, "/bikes/new", location);
    },

    render: function() {
      return(
        <div>
          <Map handleMapClick={this.handleMapClick}/>
          <Index />
        </div>
      )
    }
  });

}(this));
