

export const API = async (name, perPage, page) => {

const KEY ='30265302-aa688df85d30b20a5281b1e1c';
const basicURL = 'https://pixabay.com/api/';
  
  const response = await fetch(`${basicURL}?key=${KEY}&q=${name}&per_page=${perPage}&page=${page}&image_type=photo`)
  .then(response => response.json())
  .then(data => {return data})
  
  return response;

}