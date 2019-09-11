
import axios from 'axios';

//投稿视频
const postVideo = form => axios.post('/api/v1/videos', form).then(res => res.date);

//根据id获取ship
const getVideo = id => axios.get(`/api/v1/video${id}`).then(res => res.data);

//获取视频列表
const getVideos = () => axios.get('/api/v1/videos').then(res => res.data);

export {
    postVideo,
    getVideo,
    getVideos
}