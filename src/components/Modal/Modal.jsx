import PropTypes from "prop-types";
import {Overlay, Modal} from './Modal.styled'

export const ModalWindow = ({src, onClick, alt}) => {
return(
        <Overlay onClick={onClick}>
          <Modal>
            <img src={src} alt={alt} />
          </Modal>
        </Overlay>
        )
}

ModalWindow.propTypes = {
  onClick:PropTypes.func,
  alt:PropTypes.string,
  src:PropTypes.string   
 }