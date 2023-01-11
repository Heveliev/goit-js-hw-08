import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
player.on('timeupdate',throttle(onPlay,1000));


function onPlay (data){
const setLocal = localStorage.setItem('videoplayer-current-time',JSON.stringify(data))

}
const timeNow = JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds;
player.setCurrentTime(timeNow)

