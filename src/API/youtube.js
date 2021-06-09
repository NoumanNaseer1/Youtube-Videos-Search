import axios from 'axios';
 export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:' AIzaSyB0F225gQHIvOLVtIWDrY0R8Nb2xg1GDzs' 
    }
})