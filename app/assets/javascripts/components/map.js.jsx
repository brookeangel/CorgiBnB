(function(root) {

  root.Map = React.createClass({
    componentDidMount: function() {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 8
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener('idle', this._handleIdleEvent);
      BikeStore.addChangeListener(this._createMarkers);
    },

    _handleIdleEvent: function() {
      var bounds = this.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      var northEastCoords = {lat: northEast["J"], lng: northEast["M"]};
      var southWestCoords = {lat: southWest["J"], lng: southWest["M"]};
      var boundsObj = {northEast: northEastCoords, southWest: southWestCoords};
      ApiUtil.fetchBikes(boundsObj);

    },

    _createMarkers: function() {
      var bikes = BikeStore.all();
      var that = this;
      bikes.map(function(bike) {
        new google.maps.Marker({
          position: {lat: bike.lat, lng: bike.lng},
          map: that.map,
          title: 'Bike'
        });
      });
    },

    render: function() {
      return(
        <div className="map" ref="map"></div>
      )
    }
  });

}(this));
