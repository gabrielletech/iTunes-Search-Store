import React from 'react';
import uuid from 'react-uuid'; 

const SearchResults = (props) => {
    //empty array to store search results
    let items = [];
    let results = props.results;

    //condition to check if the props passed down is not equal to 0 to ensure 
    //the loop runs smoothly to display search results
    if (results.length !== 0) {
        for (let i = 0; i < results.results.length; i++) {
    let link = results.results[i].collectionViewUrl;
    let name = results.results[i].artistName;
    let itemTitle = results.results[i].trackCensoredName;
    let itemImage = results.results[i].artworkUrl60;

    //using variables above to grab keys from the JSON data and display: 
    items.push(
        <div 
            className="searchItems"
            style={{ display: "flex" }}
            key={uuid}
        >
            <a
                className="ituneslink"
                rel="noopener noreferrer"
                target="blank"
                href={link}
                key={uuid}
            > iTunes Link
            </a>
            <p className="itemName" key={uuid}>{name}</p>
            <img src={itemImage} alt="imgartwork"></img>
            <p  className="itemTitle" key={uuid}>{itemTitle}</p>
        </div>
        );
    }


        //incase of invalid search 
        if (results.results.length === 0) {
            items.push(
                <p key={uuid}>Invalid search, please check your spelling...</p>
            );
        }
    }
    

    return (
        <div>
            <h1>Search Results: </h1>
            {items}
        </div>
    );
};

export default SearchResults;
