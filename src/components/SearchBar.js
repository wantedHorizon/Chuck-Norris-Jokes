import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    let results;
    if(this.props.found.length>0){
      results = this.props.found.map((joke,i) => {
        return <li key={i}>{joke.value}</li>
      })
    }
    console.log(results);
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>

          <ol>
            {results}
          </ol>
        </form>
      </div>
    );
  }
}

export default SearchBar;
