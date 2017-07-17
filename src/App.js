import React from 'react'
import { Link } from 'react-router-dom'
import Page from './pages/builddetail/index';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Index</h1>
        { /* 把 <a> 变成 <Link> */ }
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

       {this.props.children}
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

       {this.props.children}
      </div>
    )
  }
}

class Inbox extends React.Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        { /* 把 <a> 变成 <Link> */ }
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

// <Route path="about" component={About} />
// <Route path="inbox" component={Inbox} />

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