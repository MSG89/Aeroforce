
function start(state, game){
    game.createPlayerAvatar(state.playerAvatar);

    window.requestAnimationFrame(timestamp => gameLoop(state,game,timestamp));
}

function gameLoop(state, game, timestamp){

    //destructing object
    const {playerAvatar} = state;
    const {playerAvatarElement} = game;


    
    modifyPlayerAvatarPosition(state,game);

    //create missile
    if(state.keys.Space){
        if(timestamp > state.missileState.nextSpawnTimestamp){
            game.createMissile(playerAvatar, state.missileState);
            state.missileState.nextSpawnTimestamp = timestamp + state.missileState.spawnInterval;
        }
    }


    //create clouds
    if(timestamp > state.cloudState.nextSpawnTimestamp){
        game.createCloud(state.cloudState);
        state.cloudState.nextSpawnTimestamp = timestamp + Math.random()*state.cloudState.maxSpawnInterval;
    }

    //create enemy
    if(timestamp > state.enemyState.nextSpawnTimestamp){
        game.createEnemy(state.enemyState);
        state.enemyState.nextSpawnTimestamp = timestamp + Math.random()*state.enemyState.maxSpawnInterval;
    }

    //Render clouds
    document.querySelectorAll('.cloud').forEach(cloud=>{
        let posY = parseInt(cloud.style.top);
        if(posY < gameScreen.offsetHeight){
            cloud.style.top = posY + state.cloudState.speed + 'px';
        }else{
            cloud.remove();
        }
    });

    //Render enemy planes
    let enemyElements = document.querySelectorAll('.enemy');

    enemyElements.forEach(enemy=>{
        let posY = parseInt(enemy.style.top);

        //detect collision with playerAvatar
        if(detectCollision(playerAvatarElement,enemy)){
            state.gameOver = true;
        }

        if(posY < gameScreen.offsetHeight){
            enemy.style.top = posY + state.enemyState.speed + 'px';
        }else{
            enemy.remove();
        }
    });

    //render missile
    document.querySelectorAll('.missile').forEach(missile=>{
        let posY = parseInt(missile.style.top);

        //detect missile/enemy collision
        enemyElements.forEach(enemy =>{
            if(detectCollision(enemy,missile)){
                enemy.remove();
                missile.remove();
            }
        })

        if(posY > 0-parseInt(missile.style.height)){
            missile.style.top = posY - state.missileState.speed + 'px';
        }else{
            missile.remove();
        }
    });

    //Render player
    playerAvatarElement.style.left = playerAvatar.posX + 'px';
    playerAvatarElement.style.top = playerAvatar.posY + 'px';

    if(state.gameOver){
        alert('Game Over');
    }else{
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }
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

//detect collision
function detectCollision(objectA, objectB){
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom ||
    first.bottom < second.top ||
    first.right < second.left ||
    first.left > second.right)

    return hasCollision;
}
