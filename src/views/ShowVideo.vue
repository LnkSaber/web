<template>
<div class="post-video">
    <el-row :gutter="20">
        <el-col :span="15">
            <video-player class="video-player-box"
                          :options ="playerOptions">

            </video-player>
        </el-col>
    </el-row>
</div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import * as API from '@/api/video/';

    import { videoPlayer } from 'vue-video-player'

    export default {
        name: 'ShowVideo',
        data() {
            return {
                video: {},
                playerOptions: {
                    fluid: true,
                    autoplay: false,
                    sources: [{
                        type: 'video/mp4',
                        src: ''
                    }],
                }
            }
        },
        methods: {
            load(){
                API.getVideo(this.$route.params.videoID ).then((res => {
                    this.video = res.data;
                    this.playerOptions.sources[0].src = this.video.url;
                }))

            },
        },
        components: {
            videoPlayer
        },
        beforeMount() {
            this.load();
        }
    }
</script>
<style>
    .video-header {
        margin-bottom: 16px;
    }
    .video-header h2{
        margin-bottom: 0px;
        font-size: 18px;
        font-weight: 500;
        color: #212121;
        line-height: 26px;
        height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video-data {
        margin-top: 6px;
        font-size: 12px;
        color: #999;
    }
    .video-info {
        color: #111;
    }
</style>
