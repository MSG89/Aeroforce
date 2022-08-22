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
        playerAvatar.posX += 2;
    }
    if(state.keys.KeyA){
        playerAvatar.posX -= 2;
    }
    if(state.keys.KeyW){
        playerAvatar.posY -= 2;
    }
    if(state.keys.KeyS){
        playerAvatar.posY += 2;
    }


    //Render
    playerAvatarElement.style.left = playerAvatar.posX + 'px';
    playerAvatarElement.style.top = playerAvatar.posY + 'px';


    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}