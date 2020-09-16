import React from 'react';
import api from '../api/api';
import JokesComponent from './JokesComponent';
import SearchBar from './SearchBar';
import './App.css';

class App extends React.Component {
  state = { found: [], joke: null, categories: [] };

  componentDidMount = () => {
    this.getJokesCategories();
  }
  getJokesCategories = async () => {
    try {
      const response = await api.get('/categories');
      if (response.status !== 200) {
        throw "request not found";
      }
      this.setState({ categories: response.data });
    } catch (e) {
      console.log(e);
    }

  }
  onSearchSubmit = async term => {
    const response = await api.get('/search', {
      params: { query: term }
    });
    this.setState({found: response.data.result});
    console.log(response);

    this.setState({ images: response.data.results });
  };
  onRandomJokeClickHandler = async (e, category) => {
    try {
      const params = new URLSearchParams();
    
      if(category){
        params.append('category',category);
      }
      const response = await api.get('/random', {
        params: params
      }

      );
      if (response.status !== 200) {
        throw "request not found";
      }
      const joke = { value: response.data.value, icon: response.data.icon_url };
      this.setState({ joke: joke });

      // console.log(response);




    } catch (e) {
      console.log(e);
    }

  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <h1 className="ui h1">Chuck Norris Jokes</h1>
        <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt=""/>
        <JokesComponent
          data={this.state.joke}
          categories={this.state.categories}
          randomHandler={this.onRandomJokeClickHandler}
        />
        <hr />
        <SearchBar onSubmit={this.onSearchSubmit} found={this.state.found}/>
        Found: {this.state.found.length} Jokes
      

      </div>
    );
  }
}

export default App;
