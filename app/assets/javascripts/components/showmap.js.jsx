(function(root) {

  root.ShowMap = React.createClass({
    componentDidMount: function() {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: this.props.bike.lat, lng: this.props.bike.lng},
        zoom: 13
      };

      this.map = new google.maps.Map(map, mapOptions);
      this.marker = new google.maps.Marker({
        position: {lat: this.props.bike.lat, lng: this.props.bike.lng},
        map: this.map,
        title: 'Corgi'
      });

    },
    
    render: function() {
      return(
        <div className="map" ref="map"></div>
      )
    }
  });

}(this));
