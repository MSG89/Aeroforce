function initState(){
    let startX = 200;
    let startY = 200;

    const state = {
        playerAvatar:{
            width: 70,
            height: 117,

            posX: startX,
            posY:startY,

            speed: 2,
        },
        keys:{

        }
    }
    return state;
}