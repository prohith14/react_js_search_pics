import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar.js'
import ImageList from './ImageList.js'

class App extends React.Component {
    state = { listOfImages: [] };

     onSearchSubmit= async (term) => {
        console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            
        });
        console.log(this);
        this.setState({ listOfImages: response.data.results });

    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onChildFormSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.listOfImages} name="rohith" />
            </div>
        )
    }
}

export default App;