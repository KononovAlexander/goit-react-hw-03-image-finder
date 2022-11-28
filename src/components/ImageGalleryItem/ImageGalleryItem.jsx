import PropTypes from "prop-types";
import { Component } from 'react';
import {GalleryItem, GallaryImg} from './ImageGalleryItem.styled';
import{ModalWindow} from 'components/Modal/Modal'

export class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }
    modalToggle = () => {
        if(!this.state.showModal){

            this.setState( 
                {showModal: true}
                )
            }
            if(this.state.showModal){
                this.setState( 
                    {showModal: false}
                    )
            }
    }
    render(){
                const {src, alt, largeImg} = this.props

                return(
                    <GalleryItem >
                    <GallaryImg src={src} alt={alt} onClick={this.modalToggle} />
                    {this.state.showModal && <ModalWindow src={largeImg} alt={alt} onClick={this.modalToggle}/>}
                </GalleryItem>
            )        
        }
}
  
ImageGalleryItem.propTypes = {
 onClick:PropTypes.func   
}
