import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { MdSearch } from 'react-icons/md';
import './components.css';
import SearchResults from './SearchResults';

var query;

class Software extends Component {
    constructor(props) {
        super(props);
        this.searchOnChange = this.searchOnChange.bind(this);
        this.fetchSearchResults = this.fetchSearchResults.bind(this);
        this.state = {
            query: "",
            searchResults: []
        };
    }

    searchOnChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    fetchSearchResults(e) {
        e.preventDefault();
        fetch(`/software/${query}`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                query: this.state.query
            })
        })
        .then(res => res.json())
        .then(result => {
            this.setState({
                searchResults: result
            })
        })
        .catch(error => alert("Server is currently down"))
    }
        
    render() {
       
    return (
      <div>
      <h2> Search Apps: </h2><br></br>
      <Row>
      <Form inline onSubmit={this.fetchSearchResults}>
            <Form.Control type="text" 
                placeholder="Search.." 
                className="mr-sm-2"
                id="search"
                onChange = {this.searchOnChange} 
            />
            <Button variant="outline-success" type="submit"> <MdSearch /></Button>
       </Form>
       </Row><br></br>
        <SearchResults results={this.state.searchResults} />
      </div>
    );
}
}


export default Software;

