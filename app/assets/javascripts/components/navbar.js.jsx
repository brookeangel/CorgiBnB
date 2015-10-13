(function(root) {

  root.Navbar = React.createClass({
    mixins: [ReactRouter.History],

    _handleClick: function() {
      this.history.pushState(null, "");
    },

    render: function() {
      return(
        <div id="nav-bar">
          <span onClick={this._handleClick}>Corgi BnB</span>
        </div>
      )
    }
  });

}(this));
