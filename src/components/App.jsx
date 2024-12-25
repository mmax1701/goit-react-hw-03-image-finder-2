import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    imageList: null,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });

    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=37350286-5f3aac9a725d44d4223b6e61c&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(imageList => this.setState({ imageList }))
      .finally(() => this.setState({ loading: false }));
  };

  onSubmit = inputValue => {
    console.log(inputValue);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <Loader />}
        {this.state.imageList && <ImageGallery />}
      </>
    );
  }
}
