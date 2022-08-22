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
        },
        createCloud(stats){
            let cloudElement = document.createElement('div');
            cloudElement.classList.add('cloud');

            cloudElement.style.width = stats.width + 'px';
            cloudElement.style.height = stats.height + 'px';

            cloudElement.style.left = Math.floor(Math.random()*(gameScreen.offsetWidth-stats.width)) + 'px';
            cloudElement.style.top = -80 + 'px';

            this.gameScreen.appendChild(cloudElement);

        }
    }

}