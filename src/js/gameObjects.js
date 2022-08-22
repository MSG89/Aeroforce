function initGameObjects() {
    startScreen = document.querySelector('.start-screen');
    gameScreen = document.querySelector('.game-screen');

    return{
        startScreen,
        gameScreen,
        createPlayerAvatar(initialState){
            let playerAvatarElement = document.createElement('div');
            playerAvatarElement.classList.add('player-avatar');

            playerAvatarElement.style.width = initialState.width + 'px';
            playerAvatarElement.style.height = initialState.height + 'px';

            playerAvatarElement.style.left = initialState.posX + 'px';
            playerAvatarElement.style.top = initialState.posY + 'px';

            this.playerAvatarElement = playerAvatarElement;
            this.gameScreen.appendChild(playerAvatarElement);

            return playerAvatarElement;
        }
    }

}