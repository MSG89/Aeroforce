function initState(){
    let startX = Math.floor(Math.random()*1500);
    let startY = 500;

    const state = {
        gameOver: false,
        playerAvatar:{
            width: 70,
            height: 117,

            posX: startX,
            posY: startY,

            speed: 2,  
        },
        cloudState:{
            width: 150,
            height: 82,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 3000,
            speed: 1,

        },
        enemyState:{
            width:96,
            height:193,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 2,
            hp: 2,
        },
        enemyStateT2:{
            width:363,
            height:147,
            speed: 3,
            hp:4,
        },
        enemyStateT3:{
            width:142,
            height:268,
            speed: 3,
            hp: 8,
        },
        missileState:{
            width: 23,
            height: 85,
            speed: 10,
            nextSpawnTimestamp: 0,
            spawnInterval: 1000,
        },
        keys:{
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        }
    }
    return state;
}