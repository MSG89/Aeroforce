
function start(state, game){
    game.createPlayerAvatar(state.playerAvatar);

    window.requestAnimationFrame(timestamp => gameLoop(state,game,timestamp));
}

function gameLoop(state, game, timestamp){

    //destructing object
    const {playerAvatar} = state;
    const {playerAvatarElement} = game;

    game.scoreScreen.textContent = `${state.score} pts`; 

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
        state.enemyState.nextSpawnTimestamp = timestamp + Math.random()*state.enemyState.maxSpawnInterval;
        let spawnType = Math.round(Math.random()*100);
 
        if(spawnType <= 80){
            game.createEnemy(state.enemyState);
        }else if(spawnType > 80 && spawnType < 95){

            game.createEnemy(state.enemyStateT2);  
                  
        }else if(spawnType >= 95){

            game.createEnemy(state.enemyStateT3);        
        }
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
        let posX = parseInt(enemy.style.left);


        if(posY < gameScreen.offsetHeight){
            enemy.style.top = posY + state.enemyState.speed + 'px';

            if(enemy.classList.contains('enemyT2')){
                enemy.style.top = posY + state.enemyStateT2.speed + 'px';      
            }
            else if(enemy.classList.contains('enemyT3')){
                enemy.style.top = posY + state.enemyStateT3.speed + 'px'; 
            }
        }else{
            enemy.remove();
        }

         //detect collision with playerAvatar
         if(detectCollision(playerAvatarElement,enemy)){
            state.gameOver = true;
        }
    });

    //render missile
    document.querySelectorAll('.missile').forEach(missile=>{
        let posY = parseInt(missile.style.top);

        //detect missile/enemy collision
        enemyElements.forEach(enemy =>{
            if(detectCollision(enemy,missile)){
                if(enemy.classList.contains('enemyT2')){
                    state.score += state.killScoreT2;
                }else if(enemy.classList.contains('enemyT3')){
                    state.score += state.killScoreT3;
                }else{
                    state.score += state.killScoreT1;
                }
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
        state.score += state.scoreRate;
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }
}

function modifyPlayerAvatarPosition(state, game){
    //moving playerAvatar
   const {playerAvatar} = state; 
   game.playerAvatarElement.style.backgroundImage = 'url("/src/css/images/player.png")';
   if(state.keys.KeyD){
       playerAvatar.posX = Math.min(playerAvatar.posX + playerAvatar.speed, game.gameScreen.offsetWidth - playerAvatar.width);
       game.playerAvatarElement.style.backgroundImage = 'url("/src/css/images/playerRight.png")';
   }
   if(state.keys.KeyA){
       playerAvatar.posX = Math.max(playerAvatar.posX - playerAvatar.speed,0);
       game.playerAvatarElement.style.backgroundImage = 'url("/src/css/images/playerLeft.png")';
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