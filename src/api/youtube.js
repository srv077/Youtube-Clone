import axios from 'axios';

export default axios.create({
   // easier get request using create than get beacuse we can specify base url and params
   baseURL:'https://www.googleapis.com/youtube/v3',
   // are like remaining request part which is dynmaic like apikey ,search query etc
  
});
//this axios file will fetch the data from api 