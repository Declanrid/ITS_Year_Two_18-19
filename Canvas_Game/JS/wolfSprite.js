var wolf = {
    game:           {},
    x:              350,
    y:              170,
    vx:             0,
    vy:             0,
    ready:          false,
    imageUrl:       "Images/wolfsheet1.png",
    baseImage:      new Image(),
    sprites:        [],
    currentSprite:  0,
    frameCount:     0,
    speedFactor:    5,
    scaleFactor:    2,
    keyRight:       39,
    keyLeft:        37,
    keyJump:        38,

    draw: function (ctx) {
            if (this.ready){
            if (this.x > canvas.width - this.sprites[this.currentSprite].sw) {this.x = canvas.width - this.sprites[this.currentSprite].sw}
            if (this.x < 0) {this.x = 0}
                ctx.drawImage(this.baseImage,
                this.sprites[this.currentSprite].sx,
                this.sprites[this.currentSprite].sy,
                this.sprites[this.currentSprite].sw,
                this.sprites[this.currentSprite].sh,
                this.x,
                this.y,
                this.sprites[this.currentSprite].sw,
                this.sprites[this.currentSprite].sh
            );
        }
    },

    tick: function (canvas) {
            this.currentSprite++;

            if (this.currentSprite == 5) {this.currentSprite = 0; }
            if (this.y > options.floor){
                this.vy = 0;
                this.y = options.floor;
            }
            if (this.y<options.floor){
                this.vy +=options.gravity;
            }
                this.x += this.vx;
                this.y += this.vy;
            for (var i=0; i< game.obstacles.length; i++){
                this.checkCollision(game.obstacles[i]);
            }
    },

    initialise: function () {

        this.baseImage.onload = function () {
            var spritew = 64;
            var spriteh = 32;
            var row =4;

            for (var col = 0; col < 5; col++) {
                wolf.sprites[col] = {};
                wolf.sprites[col].sx    = 320 + col * spritew;
                wolf.sprites[col].sy    = row * spriteh;
                wolf.sprites[col].sw    = 64;
                wolf.sprites[col].sh    = 32;
                wolf.x                  = 350;
                wolf.y                  = 450;
            }

            wolf.ready = true;

        };
        this.baseImage.src = this.imageUrl;
    },
    checkCollision: function (otherActor, canvas) {

        var wolfx       = this.x;
        var wolfy       = this.y;
        var wolfw       = this.sprites[this.currentSprite].sw;
        var wolfh       = this.sprites[this.currentSprite].sh;
        var cactusx     = otherActor.x;
        var cactusy     = otherActor.y;
        var cactusw     = otherActor.w;
        var cactush     = otherActor.h;

        if ((wolfx > cactusx - wolfw)&&
            (wolfy > cactusy - wolfh)&&
            (wolfx < cactusx + cactusw)&&
            (wolfy < cactusy + cactush)){


           /* alert(  "GAME OVER!!   " +
                    "Your Score is: " +
                    score.score +
                    "  " +
                    " Click OK To Restart Game!")

            document.location.reload(); */

        }

    },


    keyDown:function(keyCode){
        if (keyCode == this.keyRight)   {this.vx = 8;}
        if (keyCode == this.keyLeft)    {this.vx = -8;}
        if (keyCode == this.keyJump && this.y == options.floor ){this.vy = -11;
        }

    },
    keyUp:function(keyCode){
        if (keyCode == this.keyRight)   {this.vx = 0;}
        if (keyCode == this.keyLeft)    {this.vx = 0;}


    }
};



wolf.initialise();