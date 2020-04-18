import React, { Component } from 'react';

class Favorites extends Component{
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        //updates state 
        this.setState({
            [key]: value
        })
    }

    addItem() {
        //create an item with its own id
        const newItem = {
            key: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        //copy of current list 
        const list = [...this.state.list]

        //add item to list 
        list.push(newItem)

        //reset input of newItems and update new list state 
        this.setState({
            list,
            newItem: ""
        });
    }

    deleteItem(id) {
        //copy of current list of items 
        const list = [...this.state.list]

        //delete items
        const updatedList = list.slice(0, -1);

        this.setState({list: updatedList})
    };

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    };

    render() {
        return (
        <>
            <div>
                <h2>Create a List of Favorites: </h2><br></br>
                <input 
                    type="text" 
                    placeholder="Type here.."
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                    style={{ flex: '4', padding: '5px', marginLeft: '550px' }}
                />
                <button style={{ flex: '2', padding: '5px'}} onClick={() => this.addItem()}>Add</button><br></br>
            </div>
            <ul>
            {this.state.list.map(item => {
                return (
                    <li key={item.id} style={this.getStyle()}>{item.value} <button onClick={() => this.deleteItem(item.id)}>x</button></li>
                )
            })}
            </ul>
        </>
        );
    }
}
export default Favorites;

 /* state = {
        item: ''
    }

    handleChange = (e) => this.setState({ 
        item: e.target.value
    });

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            item: e.target.value
        });

    }*/