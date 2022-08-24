function initGameObjects() {
    startScreen = document.querySelector('.start-screen');
    gameScreen = document.querySelector('.game-screen');
    scoreScreen = document.querySelector('.score');

    return{
        startScreen,
        gameScreen,
        scoreScreen,
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
        createMissile(playerAvatar, missileState){
            let missileElement = document.createElement('div');
            missileElement.classList.add('missile');

            missileElement.style.left = playerAvatar.posX + playerAvatar.width/2 - missileState.width/2 + 'px';
            missileElement.style.top = playerAvatar.posY + 'px';

            missileElement.style.width = missileState.width + 'px';
            missileElement.style.height = missileState.height + 'px';

            this.gameScreen.appendChild(missileElement);
        },
        createEnemy(stats){
            let enemyElement = document.createElement('div');
            enemyElement.classList.add('enemy');

            enemyElement.style.width = stats.width + 'px';
            enemyElement.style.height = stats.height + 'px';

            enemyElement.style.left = Math.floor(Math.random()*(gameScreen.offsetWidth-stats.width)) + 'px';
            enemyElement.style.top = 0-stats.height + 'px';
            if(stats == state.enemyStateT2){
                enemyElement.style.backgroundImage = 'url("./images/enemyT2.png")';
                enemyElement.classList.add('enemyT2');
            }else if(stats == state.enemyStateT3){
                enemyElement.style.backgroundImage = 'url("./images/enemyT3.png")';
                enemyElement.classList.add('enemyT3');
            }

            this.gameScreen.appendChild(enemyElement);
        },
        createCloud(stats){
            let cloudElement = document.createElement('div');
            cloudElement.classList.add('cloud');

            cloudElement.style.width = stats.width + 'px';
            cloudElement.style.height = stats.height + 'px';

            cloudElement.style.left = Math.floor(Math.random()*(gameScreen.offsetWidth-stats.width)) + 'px';
            cloudElement.style.top = -82 + 'px';

            this.gameScreen.appendChild(cloudElement);

        }
    }

}