import {Gallery} from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => {

  return (<Gallery>
         { images.map(({id, webformatURL, tags, largeImageURL}) => {
            return(
                <ImageGalleryItem key={id} src={webformatURL} alt={tags} largeImg={largeImageURL}/>
            )
        })}

      </Gallery>)
  }
  
