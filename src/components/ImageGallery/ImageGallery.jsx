import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGallerys } from "./ImageGallery.styled";
// import { v4 as uuidv4 } from "uuid";

export const ImageGallery = ({ images, getGalleryElement }) => {
  return (
    <ImageGallerys>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.pageURL}
          image={image}
          getGalleryElement={getGalleryElement}
        />
      ))}
    </ImageGallerys>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    })
  ),
  getGalleryElement: PropTypes.func.isRequired,
};
