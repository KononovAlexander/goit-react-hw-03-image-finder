
import React  from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery}  from './ImageGallery/ImageGallery';
import {LoadMoreBtn} from './Button/Button';
import {API} from './api'
import { Loader } from './Loader/Loader'

export class App extends React.Component {
  state = {
    pictures:[],
    imgsSearch:'',
    perPage:'12',
    page: 1,
    isLoad:false,
    showButton:false
  }
  async  componentDidUpdate(prevProps , prevState) {

    if(prevState.imgsSearch !== this.state.imgsSearch ||
      prevState.page !== this.state.page) {
      try{
        const newPictures = await  API(this.state.imgsSearch, this.state.perPage, this.state.page);
        this.showButton (newPictures.totalHits)
        this.setState(prevState =>({
          pictures:[...prevState.pictures, ...newPictures.hits],  
          isLoad:false        
        }))
        
      }
      catch (error){
        console.log('error: ', error);
      }
    }
  }

  showButton (pictsArr) {
    this.state.page !== Math.ceil(pictsArr / 12) ? 
      this.setState(() => {return {showButton:true}}) :
      this.setState(() => {return {showButton:false}}) 
    
  }
  onHandleSubmit = (imgsSearch) => {
    
      this.setState(prevState => {
        if(prevState.imgsSearch !== imgsSearch){
            return{
              imgsSearch:imgsSearch,
              pictures:[],
              page:1,
              isLoad:true
            }
        }
      })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoad:true
    }))

  }
  
  render() {

    return (
      <div>
        <Searchbar onSubmit = {this.onHandleSubmit}/>
        <ImageGallery  images={this.state.pictures} />
        {this.state.isLoad && <Loader/>}
        { this.state.showButton &&
          <LoadMoreBtn onClick={this.loadMore}/>
        }
    </div>
  );
}
};
