import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = inputValue => {
    console.log(inputValue);
  };

  render() {
    return <Searchbar onSubmit={this.onSubmit} />;
  }
}
