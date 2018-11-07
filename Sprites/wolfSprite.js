var wolf = {

    x:              120,
    y:              170,
    ready:          false,
    imageUrl:       "images/wolfsheet1.png",
    baseImage:      new Image(),
    sprites:        [],
    currentSprite:  0,
    frameCount:     0,
    speedFactor:    5,
    scaleFactor:    2,

    draw: function (ctx) {
        if (this.ready){
                        ctx.drawImage(this.baseImage,
                this.sprites[this.currentSprite].sx,
                this.sprites[this.currentSprite].sy,
                this.sprites[this.currentSprite].sw,
                this.sprites[this.currentSprite].sh,
                0,170,
                this.sprites[this.currentSprite].sw,
                this.sprites[this.currentSprite].sh
            );
        }

    },

    tick: function (canvas) {
        this.currentSprite++;
        if (this.currentSprite == 5) {this.currentSprite = 0; }
        },

    initialise: function () {

        this.baseImage.onload = function () {
            var spritew = 64;
            var spriteh = 32;
            var row =4;
            for (var col = 0; col < 5; col++) {
                    wolf.sprites[col] = {};
                    wolf.sprites[col].sx = 320 + col * spritew;;
                    wolf.sprites[col].sy = row * spriteh;;
                    wolf.sprites[col].sw = 64;
                    wolf.sprites[col].sh = 32;
                    this.sprites[this.currentSprite].x = this.sprites[this.currentSprite].x + 10;
            }

            wolf.ready = true;

        };
        this.baseImage.src = this.imageUrl;
    }
};

wolf.initialise();