import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundar';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {  //made method of App class other than constructor
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length? 
         <h1>Robots are Loading...</h1>:
           (
                <div className='text-center'>
                    <h1 className='font-bold text-4xl p-2'>ROBOT FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;