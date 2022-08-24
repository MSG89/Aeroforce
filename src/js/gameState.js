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
            willManeuver:0
        },
        enemyStateT3:{
            width:142,
            height:268,
            speed: 3,
            hp: 8,
            willManeuver:0
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