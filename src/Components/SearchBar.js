import React from 'react'

class SearchBar extends React.Component {
    // can be passed as callback function
    // onInputChange(event){

    //     console.log(event.target.value);
    // }

    state = { term: '' };

    onFormSubmit = (event) =>
    {
        event.preventDefault();
       this.props.onChildFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div  className="feild">
                        <label>Image Search</label>
                        {/*Arrow function for single line of code  */}
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />

                        {/* <input type="text" onChange={this.onInputChange} /> */}
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar