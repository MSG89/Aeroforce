function start(state, game){
    game.createPlayerAvatar(state.playerAvatar);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){

    //destructing object
    const {playerAvatar} = state;
    const {playerAvatarElement} = game;
    
    //moving playerAvatar
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


    //Render
    playerAvatarElement.style.left = playerAvatar.posX + 'px';
    playerAvatarElement.style.top = playerAvatar.posY + 'px';


    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}