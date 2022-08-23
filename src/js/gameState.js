function initState(){
    let startX = Math.floor(Math.random()*1500);
    let startY = 500;

    const state = {
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
        },
        keys:{
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
        }
    }
    return state;
}