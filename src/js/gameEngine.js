
function start(state, game){
    game.createPlayerAvatar(state.playerAvatar);

    window.requestAnimationFrame(timestamp => gameLoop(state,game,timestamp));
}

function gameLoop(state, game, timestamp){

    //destructing object
    const {playerAvatar} = state;
    const {playerAvatarElement} = game;
    
    modifyPlayerAvatarPosition(state,game);

    //create clouds
    if(timestamp > state.cloudState.nextSpawnTimestamp){
        game.createCloud(state.cloudState);
        state.cloudState.nextSpawnTimestamp = timestamp + Math.random()*state.cloudState.maxSpawnInterval;
    }

    //Render player
    playerAvatarElement.style.left = playerAvatar.posX + 'px';
    playerAvatarElement.style.top = playerAvatar.posY + 'px';

    //Render clouds
    document.querySelectorAll('.cloud').forEach(cloud=>{
        let posY = parseInt(cloud.style.top);
        if(posY > gameScreen.offsetHeight){
            cloud.remove();
        }
        cloud.style.top = posY + state.cloudState.speed + 'px';
    });

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyPlayerAvatarPosition(state, game){
    //moving playerAvatar
   const {playerAvatar} = state; 
   if(state.keys.KeyD){
       playerAvatar.posX = Math.min(playerAvatar.posX + playerAvatar.speed, game.gameScreen.offsetWidth - playerAvatar.width);
   }
   if(state.keys.KeyA){
       playerAvatar.posX = Math.max(playerAvatar.posX - playerAvatar.speed,0);
   }
   if(state.keys.KeyW){
       playerAvatar.posY = Math.max(playerAvatar.posY - playerAvatar.speed,0);
   }
   if(state.keys.KeyS){
       playerAvatar.posY = Math.min(playerAvatar.posY + playerAvatar.speed, game.gameScreen.offsetHeight - playerAvatar.height);
   }
}
