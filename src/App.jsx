import React from 'react'
import { Link } from 'react-router-dom'
import Page from './pages/pipelist/index';
import store from './store/index';
import { Route, BrowserRouter as Router } from 'react-router-dom'


store.initAxios()

class App extends React.Component {
  render() {
    return (<Router>
      <Route path="/" component={Page}>
        <Route path="about" component={Page} />
      </Route>
    </Router>)
  }
}

export default App;