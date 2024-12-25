import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
