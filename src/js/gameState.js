function initState(){
    let startX = Math.floor(Math.random()*1500);
    let startY = 500;

    const state = {
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScoreT1: 100,
        killScoreT2: 200,
        killScoreT3: 500,
        playerAvatar:{
            width: 53, //70
            height: 88, //117

            posX: startX,
            posY: startY,

            speed: 2,  
        },
        cloudState:{
            width: 300,
            height: 164,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 5000,
            speed: 1,

        },
        enemyState:{
            width:48,   //96
            height:96, //193
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 2,
        },
        enemyStateT2:{
            width:181, // 363
            height:74, // 147
            speed: 3,
            willManeuver:0
        },
        enemyStateT3:{
            width:71, // 142
            height:134, // 268
            speed: 3,
            willManeuver:0
        },
        missileState:{
            width: 12, //23
            height: 43, //85
            speed: 8,
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