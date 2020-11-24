class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene, 300, 200, 'player');
        this.depth = 1;
        this.speed = 200;

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.buttons = scene.input.keyboard.addKeys('up,down,left,right,w,a,s,d');

    }
    //move player
    move()
    {
        this.body.velocity.y = 0;
        this.body.velocity.x = 0;
        if (this.buttons.up.isDown || this.buttons.w.isDown)
        {
            this.body.velocity.y = -this.speed;
        }
        if (this.buttons.down.isDown || this.buttons.s.isDown)
        {
            this.body.velocity.y = this.speed;
        }
        if (this.buttons.left.isDown || this.buttons.a.isDown)
        {
            this.body.velocity.x = -this.speed;
        }
        if (this.buttons.right.isDown || this.buttons.d.isDown)
        {
            this.body.velocity.x = this.speed;
        }
    }

}