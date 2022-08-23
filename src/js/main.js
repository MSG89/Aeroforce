let game = initGameObjects();
let state = initState();

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
];

//checks if a particular key is 'down'
document.addEventListener('keydown', (e)=> { 
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = true;
    };
    
});
//checks if a particular key is 'up'
document.addEventListener('keyup', (e)=> {
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    };
});



game.startScreen.addEventListener('click', (e)=>{
    

    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    //start game
    start(state, game);

});

