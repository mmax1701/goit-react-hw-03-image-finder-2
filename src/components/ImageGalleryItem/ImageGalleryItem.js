export const ImageGalleryItem = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No images found</p>;
  }

  return data.map(image => {
    return (
      <li key={image.id} className="gallery-item">
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  });
};
