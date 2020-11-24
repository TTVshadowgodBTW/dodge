class PlayScene extends Phaser.Scene 
{
    //construct new scene
    constructor() 
    {
        super('play');      //set this scene's id within superclass construtor
    }

    //preload extarnal game assets
    preload()
    {
        this.load.path = 'assets/';
        this.load.image( 'background','background.png' );
        this.load.image('player', 'player.png');
        this.load.image('enemy', 'enemy.png');
    }


    //create game data
    create() 
    {
        this.create_map();
        this.player = new Player(this);
        this.create_enemys();
        this.setup_physics();
    }

    //Update game data
    update() 
    {
     this.player.move();   
    }

    create_map(){
        this.add.image(640/2, 480/2, 'background')
    }
    create_enemys(){
        this.enemys = [];
       let event = {};
       event.delay = 200;
       event.callback = this.spawn_enemy;
       event.callbackScope = this;
       event.loop = true;
       this.time.addEvent(event, this);
    }

    spawn_enemy(){
        let position = {};
        position.x = Phaser.Math.Between(0, 640);
        position.y = -32

        let monster = new Enemy(this, position);
        this.enemys.push(monster);
    }
    setup_physics(){
        this.physics.add.overlap(this.player,this.enemys, this.gameover, null, this);
    }
    gameover(){
        this.scene.restart();
    }
}