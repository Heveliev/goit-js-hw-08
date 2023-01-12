import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
player.on('timeupdate',throttle(onPlay,1000));


function onPlay ({seconds}){
localStorage.setItem('videoplayer-current-time',JSON.stringify(seconds));
};
const timeNow = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(timeNow);

