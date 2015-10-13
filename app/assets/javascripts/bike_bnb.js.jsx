// import createBrowserHistory from 'history/lib/createBrowserHistory';

$(function() {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function() {
      return(
        <div>
          <Navbar />
          <div>
            {this.props.children}
          </div>
        </div>
      )
    }
  })

  var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path="index" component={Index} />
      <Route path="show/:id" component={ShowBike} />
      <Route path="bikes/new" component={BikeForm} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root)
});
