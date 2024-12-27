import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Blocks } from 'react-loader-spinner';

export class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
  };

  componentDidUpdate(prevProps, _) {
    const searchImage = this.props.inputValue;

    if (prevProps.inputValue !== this.props.inputValue) {
      console.log('изменился поисковый запрос');
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${searchImage}&page=1&key=37350286-5f3aac9a725d44d4223b6e61c&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <Blocks />}
        <ul className="gallery">
          {this.state.data && <ImageGalleryItem data={this.state.data.hits} />}
        </ul>
      </>
    );
  }
}
