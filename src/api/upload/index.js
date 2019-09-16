
import axios from 'axios';


const postUplaodToken = fileName => axios.post('/api/v1/upload/token',{filename: fileName}).then(res => res.data);


export default postUplaodToken;