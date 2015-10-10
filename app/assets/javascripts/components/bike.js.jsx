(function(root) {

  root.Bike = React.createClass({

    render: function() {
      var bikeStyle = {
        backgroundImage: 'url(' + this.props.bike.image_url + ')',
        backgroundSize: 'cover'
      };

      return(
        <div className="bikeItem" style={bikeStyle}>
            <div className="bikeAttributes">
              <span>
              <b>Coordinates:   </b> {this.props.bike.lat}, {this.props.bike.lng}<br />
              <b>Description:   </b> {this.props.bike.description}
              </span>
            </div>
        </div>
      );
    }

  });

}(this));

  // <img src={this.props.bike.image_url}>
  // </img>
