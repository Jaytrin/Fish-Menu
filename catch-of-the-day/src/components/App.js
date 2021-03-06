import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const{params} = this.props.match;
        //first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
        context: this,
        state: 'fishes'
    })
    };

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

 

    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish //date.now gives number of milliseconds since 1970. This is creating a unique identifier
        // 3. Set the new fishes object to state
        this.setState({
            fishes: sampleFishes
        })
    }

    updateFish = (key, updatedFish) => {
        //1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set taht to state
        this.setState({fishes});
    }

    deleteFish = (key) => {
        // 1. take a copy of state
        const fishes = {...this.state.fishes};
        // 2. update the state. Setting null is so firebase deletes it.
        fishes[key] = null;
        // 3. update state
        this.setState({fishes})
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }

    addToOrder = (key) => {
        // 1. Take a copy of state
        const order = {...this.state.order};
        // 2. Either add to the order, or update the number of an order
        order[key] = order[key] + 1 || 1; //if the order doesnt exist, it will set it to 1
        // 3. Call setState to update our state object
        this.setState({
            order
        })
    }

    render(){
        return ( 
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} 
                        details={this.state.fishes[key]} 
                        updateFish={this.props.updateFish}
                        addToOrder={this.addToOrder} /> )} 
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    updateFish = {this.updateFish}
                    deleteFish = {this.deleteFish}
                    />
            </div>
        )
    }
}

export default App;