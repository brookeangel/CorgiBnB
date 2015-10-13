(function(root) {

  root.Bike = React.createClass({
    mixins: [ReactRouter.History],

    _handleClick: function() {
      var id = this.props.bike.id;
      this.history.pushState(null, "show/" + id);
    },

    render: function() {
      var bikeStyle = {
        backgroundImage: 'url(' + this.props.bike.image_url + ')',
        backgroundSize: 'cover'
      };

      return(
        <div className="bikeItem" style={bikeStyle} onClick={this._handleClick}>
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
