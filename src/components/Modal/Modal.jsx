import PropTypes from "prop-types";
import css from './Modal.module.css'

export const Modal = ({src, onClick, alt}) => {
return(
        <div className={css.overlay} onClick={onClick}>
          <div className={css.modal}>
            <img src={src} alt={alt} />
          </div>
        </div>
        )
}

Modal.propTypes = {
  onClick:PropTypes.func,
  alt:PropTypes.string,
  src:PropTypes.string   
 }