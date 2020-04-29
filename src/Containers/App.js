import React from 'react';
import CardList from '../Components/CardList.js';
//import { robots } from './robots';
import SeachBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		console.log("componentDidMount");
		fetch("https://jsonplaceholder.typicode.com/users").then(response => {
			const respond = response.json();
			return respond;
		})
		.then(users => {
			
			this.setState({robots : users});
		});

	}

	onSearchChange = (event) => {
		//console.log("event.target.value", event.target.value);
		this.setState({searchfield: event.target.value});
		
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter((element,i) => {
			return element.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		//console.log(filteredRobots);


		return !robots.length ? 
					(<h1>Loading</h1>) : 
					(<div className='tc'>
						<h1>Robofriends</h1>
						<SeachBox searchChange = {this.onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								<CardList robots = {filteredRobots} />
							</ErrorBoundary>	
						</Scroll>
					 </div>
					)
			
	}
};	

export default App;