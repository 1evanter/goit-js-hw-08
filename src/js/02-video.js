import Player from '@vimeo/player';
import throttle from '/node_modules/lodash.throttle';

  const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(setPlayTime, 1000));

function setPlayTime(evt) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds))
}
    
const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? [];

player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
          
        break;

        default:
      
        break;
    }
});
