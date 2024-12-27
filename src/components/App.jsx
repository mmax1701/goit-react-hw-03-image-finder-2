import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    inputValue: null,
  };

  onSubmit = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery inputValue={this.state.inputValue} />
      </>
    );
  }
}
