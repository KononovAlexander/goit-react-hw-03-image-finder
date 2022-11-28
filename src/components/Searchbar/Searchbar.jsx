import PropTypes from "prop-types";
import { Header, Form, FormBtn, Input } from "./Searchbar.styled";
import {Component} from 'react';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
    state ={
      image_name:null
    }

    inputChange = event => {
      this.setState({image_name : event.currentTarget.value.toLowerCase()})
    }

    handleSubmitForm = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.image_name)
      this.setState({image_name:''})
    }

  render() {

    return (
      <Header >
    <Form onSubmit = {this.handleSubmitForm}>
      <FormBtn type="submit" >
        <FaSearch color={'#000'} size={'20px'}/>          
      </FormBtn>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.inputChange}
        />
    </Form>
  </Header>)
  }
}

Searchbar.propTypes = {
 onSubmit:PropTypes.func 
} 