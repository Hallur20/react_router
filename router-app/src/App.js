import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {return(
        <div>
            <Header />
            <Main />
        </div>)
    }
}

const Roster = () => (
    <div>
        <h1>Welcome to Roster!</h1>
    </div>
)

const Schedule = () => (
    <div>
        <h1>Welcome to Schedule!</h1>
    </div>
)

const Home = () => (
    <div>
        <h1>Welcome to Home!</h1>
    </div>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)

export default App;
