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