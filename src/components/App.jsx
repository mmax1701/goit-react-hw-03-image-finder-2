import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    inputValue: null,
    loading: false,
  };

  onSubmit = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery inputValue={this.state.inputValue} />
      </>
    );
  }
}
